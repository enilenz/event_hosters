// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

// This contract is written under the premise of an event center with limited amount of rooms.
// Organizers who wish to host events book said room(s) for a limited amount of time and sell their tickets.
// After said events are concluded, rooms are reallocated for future events.

contract EventFactory is ERC20 {
    address internal cUsdTokenAddress =
        0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    uint8 private constant EVENT_ROOMS = 15;
    uint16 private constant ROOM_CAPACITY = 300;
    uint256 private constant freeCoinEventCreation = 5 ether;
    uint256 private constant freeCoinTicketBought = 1 ether;
    uint public coinToUsdValue = 0.000001 ether;
    uint8 private eventIDs;

    address private contractAddress = payable(address(this));
    address private mine = payable(0x6155C23F7Ed8f8eD535D8DB6e03d0B0B5A9f467f);
    uint256 private constant standard = 1 ether;

    // Room struct with the rooms physical id and whether it is booked for an event.
    struct Room {
        uint id;
        bool booked;
        uint currentEvent;
    }
    uint public totalEvents = 1;
    Room[15] public allRooms;
    mapping(uint => Event) allEvents;


    enum EventType {
        Social,
        Business,
        Personal
    }

    struct Attendees {
        address attendants;
        uint volume;
    }

    struct Event {
        address owner;
        string name;
        address[] attendees;
        mapping(address => uint) attendeesTicketVolume;
        uint ticketVolume;
        uint ticketPrice;
        uint roomId;
        uint startDate;
        uint endDate;
        EventType eventType;
    }

    event EventCreated(
        address owner,
        string eventOwnerName,
        uint ticketVolume,
        uint ticketPrice,
        uint startDate,
        uint endDate,
        EventType eventType
    );

    event RoomInfo(uint id, bool x);

    constructor() ERC20("Event Hosters Token", "EHT") {
        _mint(contractAddress, 1000000 * 10**decimals());

        allRooms[0] = Room(0, false, 0);
        allRooms[1] = Room(1, false, 0);
        allRooms[2] = Room(2, false, 0);
        allRooms[3] = Room(3, false, 0);
        allRooms[4] = Room(4, false, 0);
        allRooms[5] = Room(5, false, 0);
        allRooms[6] = Room(6, false, 0);
        allRooms[7] = Room(7, false, 0);
        allRooms[8] = Room(8, false, 0);
        allRooms[9] = Room(9, false, 0);
        allRooms[10] = Room(10, false, 0);
        allRooms[11] = Room(11, false, 0);
        allRooms[12] = Room(12, false, 0);
        allRooms[13] = Room(13, false, 0);
        allRooms[14] = Room(14, false, 0);
    }

    /// @dev Function to check if there are available rooms to book.
    function checkAvailableRooms()
        public
        returns (uint roomAvailable, bool available)
    {
        for (uint i = 0; i < EVENT_ROOMS; i++) {
            if (allRooms[i].booked == false) {
                roomAvailable = allRooms[i].id;
                available = true;
                emit RoomInfo(roomAvailable, available);
                break;
            }
        }
    }

    /// @dev Function to create an event.
    function createEvent(
        address payable owner,
        string calldata name,
        uint ticketVolume,
        uint ticketPrice,
        uint startDate,
        uint endDate,
        EventType eventType
    ) external payable {
        (uint roomAvailable, bool available) = checkAvailableRooms();
        require(available == true, "Sorry, no available rooms to book");
        require(owner != address(0), "invalid address given");
        require(
            ticketVolume <= ROOM_CAPACITY,
            "ticket volume exceeds room capacity"
        );
        require(
            startDate > block.timestamp && endDate > startDate,
            "Invalid starting and ending dates"
        );
        uint coinsToUsd = balanceOf(msg.sender) * coinToUsdValue;
        // if balance of user is enough to pay for the fee of creating an event
        // with coins, they are deducted from the balance of user
        // else cUSD must be paid
        if (coinsToUsd >= standard) {
            // number of coins to match the cUSD value of standard is calculated
            uint cost = standard / coinsToUsd;
            _transfer(msg.sender, address(this), cost);
        } else {
            require(
                IERC20Token(cUsdTokenAddress).transferFrom(
                    msg.sender,
                    mine,
                    standard
                ),
                "Transfer failed."
            );
            if (balanceOf(address(this)) >= freeCoinEventCreation) {
                _transfer(address(this), msg.sender, freeCoinEventCreation);
            }
        }

        Event storage newEvent = allEvents[totalEvents];
        totalEvents++;
        allRooms[roomAvailable].booked = true;
        allRooms[roomAvailable].currentEvent = totalEvents;
        newEvent.owner = owner;
        newEvent.name = name;
        newEvent.ticketVolume = ticketVolume;
        newEvent.ticketPrice = ticketPrice;
        newEvent.startDate = startDate;
        newEvent.endDate = endDate;
        newEvent.roomId = roomAvailable;
        newEvent.eventType = eventType;

        emit EventCreated(
            owner,
            name,
            ticketVolume,
            ticketPrice,
            startDate,
            endDate,
            eventType
        );
    }

    function getEventInfo(uint id)
        external
        view
        returns (
            address owner,
            string memory name,
            uint ticketVolume,
            uint roomId,
            uint ticketPrice,
            uint startDate,
            uint endDate,
            EventType eventType,
            address[] memory attendees
        )
    {
        Event storage theEvent = allEvents[id];

        owner = theEvent.owner;
        name = theEvent.name;
        ticketVolume = theEvent.ticketVolume;
        roomId = theEvent.roomId;
        ticketPrice = theEvent.ticketPrice;
        startDate = theEvent.startDate;
        endDate = theEvent.endDate;
        eventType = theEvent.eventType;
        attendees = theEvent.attendees;
    }

    function getEventAttendeesTicketVolume(uint id) public view returns (uint) {
        return (allEvents[id].attendeesTicketVolume[msg.sender]);
    }

    /// @dev Function to buy event ticket.
    /// @notice coins is added to buyer's balance if there is sufficient coins on the smartcontract
    function buyEventTicket(uint id, uint volume)
        external
        payable
        returns (bool)
    {
        require(id < EVENT_ROOMS, "Query of nonexistent room/event");
        require(volume <= 3, "No user may buy more than three tickets");
        Event storage theEvent = allEvents[allRooms[id].currentEvent];
        require(
            theEvent.owner != msg.sender,
            "You can't buy tickets for your own event"
        );
        require(
            theEvent.ticketVolume >= volume,
            "Volume is greater than the number of tickets available"
        );
        require(block.timestamp < theEvent.endDate, "Event is over");
        theEvent.attendeesTicketVolume[msg.sender] += volume;
        theEvent.attendees.push(msg.sender);

        theEvent.ticketVolume -= volume;
        if (balanceOf(address(this)) >= freeCoinTicketBought) {
            _transfer(address(this), msg.sender, freeCoinTicketBought);
        }
        require(
            IERC20Token(cUsdTokenAddress).transfer(
                theEvent.owner,
                theEvent.ticketPrice
            ),
            "Transfer failed."
        );

        return true;
    }

    /// @dev Function for the owner to change the ticket price
    function changeEventPrice(uint id , uint price) public {
        require(msg.sender == allEvents[id].owner);
        allEvents[id].ticketPrice = price;
    }

    receive() external payable {}
}
