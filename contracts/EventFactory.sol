// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

// This contract is written under the premise of an event center with limited amount of rooms.
// Organizers who wish to host events book said room(s) for a limited amount of time and sell their tickets.
// After said events are concluded, rooms are reallocated for future events.

contract EventFactory {
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    address private owner;
    uint8 private constant EVENT_ROOMS = 15;
    uint16 private constant ROOM_CAPACITY = 300;
    uint256 private constant freeCoinEventCreation = 5000000000000000000;
    uint256 private constant freeCoinTicketBought = 5000000000000000000;
    uint8 private eventIDs;

    address payable mine = payable(0xdeDAA82112CC660a979619307865bFfBB31A067C);

    uint256 private constant standard = 1000000000000000000;
    
    
    // Room struct with the rooms physical id and whether it is booked for an event.
    struct Room{
        uint id;
        bool booked;
    }

    Room[] public allRooms;

    constructor() {

        allRooms.push(Room(0, false));
        allRooms.push(Room(1, false));
        allRooms.push(Room(2, false));
        allRooms.push(Room(3, false));
        allRooms.push(Room(4, false));
        allRooms.push(Room(5, false));
        allRooms.push(Room(6, false));
        allRooms.push(Room(7, false));
        allRooms.push(Room(8, false));
        allRooms.push(Room(9, false));
        allRooms.push(Room(10, false));
        allRooms.push(Room(11, false));
        allRooms.push(Room(12, false));
        allRooms.push(Room(13, false));
        allRooms.push(Room(14, false));
        

    }

    receive() external payable{}

    event RoomInfo(uint id, bool x);

    // Function to check if there are available rooms to book.
    function checkAvailableRooms() public returns(uint x, bool y)  {
        for(uint i = 0; i < EVENT_ROOMS; i++){
            if(allRooms[i].booked == false){
                x = allRooms[i].id;
                y = true;
                emit RoomInfo(x,y);
                break;
            }
        }
    }

  
    
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

     enum EventType{
        Social,
        Business,
        Personal
    }

    enum Location{
        Lagos,
        Abuja,
        Enugu
    }

    struct Attendees{
        address attendants;
        uint volume; 
    }

    struct Event{
        address eventOwner;
        string eventName;
        address[] attendees;
        mapping(address => uint) attendeesTicketVolume;
        uint ticketVolume;
        uint ticketPrice;
        uint roomId;
        string startDate;
        string endDate;
        EventType eventType; 
    }

    event EventCreated(
        address eventOwner,
        string eventOwnerName,
        uint ticketVolume,
        uint ticketPrice,
        string startDate,
        string endDate,
        EventType eventType
    );

    mapping (uint => Event) allEvents;

    // Function to create an event.
    function createEvent(
        address payable eventOwner,
        string memory eventName,
        uint ticketVolume,
        uint ticketPrice,
        string memory startDate,
        string memory endDate,
        EventType eventType

    ) payable external{

     	require(
		  IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender, 
			mine,
			standard
		  ),
		  "Transfer failed."
		);

        (uint x, bool y) = checkAvailableRooms();
        require(y == true, "Sorry, no available rooms to book");      
        require(eventOwner != address(0), "invalid address given");
        require(ticketVolume <= ROOM_CAPACITY, "ticket volume exceeds room capacity");
        allRooms[x].booked = true;
        Event storage newEvent = allEvents[x];

        newEvent.eventOwner = eventOwner;
        newEvent.eventName = eventName; 
        newEvent.ticketVolume = ticketVolume;
        newEvent.ticketPrice = ticketPrice;
        newEvent.startDate = startDate;
        newEvent.endDate = endDate;
        newEvent.roomId = x;
        newEvent.eventType = eventType;

        emit EventCreated(eventOwner, eventName, ticketVolume, ticketPrice, startDate, endDate, eventType);

    }

    // payments to event owner either on delete event or seperate function
    function deleteEvent(uint id) public  returns(string memory n) {
        allRooms[id].booked = false;
        n = allEvents[id].eventName;
        delete allEvents[id];
        return n;
    }

    function getEventInfo(uint id) view external returns(
        address, string memory, uint, uint, uint,  string memory, string memory, EventType
    ){
        Event storage theEvent = allEvents[id];
        return (
            theEvent.eventOwner,
            theEvent.eventName,
            theEvent.ticketVolume,
            theEvent.roomId,
            theEvent.ticketPrice,
            theEvent.startDate,
            theEvent.endDate,
            theEvent.eventType
        );
    }

    function getEventAttendees(uint id) public view returns(address[] memory){
        
        return(allEvents[id].attendees);
    }

    function getEventAttendeesTicketVolume(uint id ) public view returns (uint){
        return(allEvents[id].attendeesTicketVolume[msg.sender]);
    }

    error NoSuchEvent(uint id);

    // Function to buy event ticket.
    function buyEventTicket(uint id, uint volume) payable external returns(bool){
        for(uint i = 0; i < EVENT_ROOMS; i++){
            if(id == allRooms[i].id){
                break;
            }
        }

        Event storage theEvent = allEvents[id];

     	require(
		  IERC20Token(cUsdTokenAddress).transfer( 
			theEvent.eventOwner,
			theEvent.ticketPrice
		  ),
		  "Transfer failed."
		);
        
        require(volume <= 3, "No user may buy more than three tickets");
        theEvent.attendeesTicketVolume[msg.sender] = volume;
        theEvent.attendees.push(msg.sender);

        theEvent.ticketVolume -= volume;




        return true;
    }

    function testTransfer() public returns(bool s){
     	require(
		  IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender, 
			mine,
			standard
		  ),
		  "Transfer failed."
		);
        s= true;
    }

    

   

    
}