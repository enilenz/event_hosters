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

contract EventFactory {
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    uint internal eventsLength = 0;

    address private owner;
    uint8 private constant EVENT_ROOMS = 15;
    uint8 private constant ROOM_CAPACITY = 100;
    uint64 private constant rate = 1 ;
    uint8 private eventIDs;

    struct Room{
        uint id;
        bool booked;
    }

    Room[] public allRooms;

    constructor(){
        owner = payable(msg.sender);
       // eventIDs = 0;
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

    event RoomInfo(uint id, bool x);

    function checkAvailableRooms() public payable returns(uint x, bool y)  {
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

    Attendees[] private ff;

    struct Event{
        address eventOwner;
        string eventOwnerName;
        mapping(address => uint) attendees;
        uint ticketVolume;
        uint roomId;
        uint ticketPrice;
        uint eventDays;
        string description;
        string[] datesBooked;
        EventType eventType; 
    }

    event EventCreated(
        address eventOwner,
        string eventOwnerName,
     //   mapping(address => uint) 
        uint ticketVolume,
        uint id,
        uint ticketPrice,
        uint eventDays, 
        string description,
        string[] datesBooked,
        EventType eventType
    );

    mapping (uint => Event) allEvents;
   // uint[] private ids;

    function createEvent(
        address eventOwner,
        string memory eventOwnerName,
        uint ticketVolume,
        uint ticketPrice,
        uint eventDays,
        string memory description,
        string[] memory datesBooked,
        EventType eventType

    ) payable external{
        
       	require(
		  IERC20Token(cUsdTokenAddress).transferFrom(
			msg.sender,
			owner,
			rate
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
        newEvent.eventOwnerName = eventOwnerName; 
        newEvent.ticketVolume = ticketVolume;
        newEvent.roomId = x;
        newEvent.ticketPrice = ticketPrice;
        newEvent.eventType = eventType;
        newEvent.description = description;
        newEvent.eventDays = eventDays;
        newEvent.datesBooked = datesBooked;

    }

    // payments to event owner either on delete event or seperate function
    function deleteEvent(uint id) public returns(string memory n){
        allRooms[id].booked = false;
        n = allEvents[id].description;
        delete allEvents[id];
        return n;
    }

    function getEventInfo(uint id) view external returns(
        address, string memory, uint, uint, uint, uint, string memory, string[] memory, EventType
    ){
        Event storage theEvent = allEvents[id];
        return (
            theEvent.eventOwner,
            theEvent.eventOwnerName,
            theEvent.ticketVolume,
            theEvent.roomId,
            theEvent.ticketPrice,
            theEvent.eventDays,
            theEvent.description,
            theEvent.datesBooked,
            theEvent.eventType
        );
    }

   // error NoSuchEvent(uint id);

    function buyEventTicket(uint id, uint volume) payable external returns(bool){
        for(uint i = 0; i < EVENT_ROOMS; i++){
            if(id == allRooms[i].id){
                break;
            }
        }
        Event storage theEvent = allEvents[id];
        
        require(volume <= 3, "No user may buy more than three tickets");
        require(theEvent.ticketVolume < volume);
       
        theEvent.attendees[msg.sender] = volume;

        theEvent.ticketVolume -= volume;



        //emit some kind of event


        return true;
    }

    

   

    
}