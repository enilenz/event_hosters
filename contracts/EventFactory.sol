// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EventFactory {

    address private owner;
    uint8 private constant EVENT_ROOMS = 15;
    uint8 private constant ROOM_CAPACITY = 100;
    uint64 private constant rate = 1 ether;
    uint8 private eventIDs;

    struct Room{
        uint id;
        bool booked;
    }

    Room[] public allRooms;

    constructor(){
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

    struct Attendees{
        address attendants;
        uint volume; 
    }

    Attendees[] private ff;

    struct Event{
        address eventOwner;
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
        uint ticketVolume,
        uint ticketPrice,
        uint eventDays,
        string memory description,
        string[] memory datesBooked,
        EventType eventType

    ) payable external{

        (uint x, bool y) = checkAvailableRooms();
        require(y == true, "Sorry, no available rooms to book");      
        require(msg.value ==  eventDays * rate, "invalid payment amount");
        require(eventOwner != address(0), "invalid address given");
        require(ticketVolume <= ROOM_CAPACITY, "ticket volume exceeds room capacity");
        allRooms[x].booked = true;
        Event storage newEvent = allEvents[x];

        newEvent.eventOwner = eventOwner;
        newEvent.ticketVolume = ticketVolume;
        newEvent.roomId = x;
        newEvent.ticketPrice = ticketPrice;
        newEvent.eventType = eventType;
        newEvent.description = description;
        newEvent.eventDays = eventDays;
        newEvent.datesBooked = datesBooked;

    }

    function deleteEvent(uint id) public returns(string memory n){
        allRooms[id].booked = false;
        n = allEvents[id].description;
        delete allEvents[id];
        return n;
    }

    function getEventInfo(uint id) view external returns(
        address, uint, uint, uint, uint, string memory, string[] memory, EventType
    ){
        Event storage theEvent = allEvents[id];
        return (
            theEvent.eventOwner,
            theEvent.ticketVolume,
            theEvent.roomId,
            theEvent.ticketPrice,
            theEvent.eventDays,
            theEvent.description,
            theEvent.datesBooked,
            theEvent.eventType
        );
    }

    error NoSuchEvent(uint id);

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