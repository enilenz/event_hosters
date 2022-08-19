import React, { useEffect } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Event from './Event'


const Events = ({ createEvent,  buyTicket, connectedAddress}) => {

  const [organizerAddress, setOrganizerAddress] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [organizerAddednfo, setOrganizerAddednfo] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [ticketNumber, setTicketNumber] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [foodAndDrink, setFoodAndDrink] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const eventTypes = ["Social", "Business" ,"Personal"]
  const location = ["Lagos", "Abuja", "Enugu"]

  function addDays(originalDate, days){
    let cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }

  const [events, setEvents] = useState([
    {
      eventOrganizerPaymentAddress: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      eventOrganizer: "Heritage Productions",
      name: "Photography Workshop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "+2348020709467",
      ticketNumber: 56,
      ticketPrice: 0.5,
      eventType: eventTypes[0],
      startDate: new Date(),
      endDate: new Date(),
      locationBooked: location[2],
      foodAndDrink: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      eventOrganizerPaymentAddress: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      eventOrganizer: "The Johnson Family",
      name: "Wedding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "ninajohnson999@gmail.com",
      ticketNumber: 100,
      ticketPrice: 1,
      eventType: eventTypes[1],
      startDate: new Date(),
      endDate: new Date(),
      locationBooked: location[1],
      foodAndDrink: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      eventOrganizerPaymentAddress: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      eventOrganizer: "Standard Banking ",
      name: "Business Conference",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "www.stdbmk.com",
      ticketNumber: 89,
      ticketPrice: 1,
      eventType: eventTypes[2],
      startDate: new Date(),
      endDate: new Date(),
      locationBooked: location[0],
      foodAndDrink: false,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      eventOrganizerPaymentAddress: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      eventOrganizer: "Lucci Wears",
      name: "Fashion Show",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "randomMag@gmail.com",
      ticketNumber: 100,
      ticketPrice: 0.5,
      eventType: eventTypes[0],
      startDate: new Date(),
      endDate: new Date(),
      locationBooked: location[2],
      foodAndDrink: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      eventOrganizerPaymentAddress: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      eventOrganizer: "Questionable Science Labs",
      name: "Laboratory Experiment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "qlabs@gmail.com",
      ticketNumber: 37,
      ticketPrice: 0.3,
      eventType: eventTypes[2],
      startDate: new Date(),
      endDate: new Date(),
      locationBooked: location[2],
      foodAndDrink: false,
      id: Math.floor(Math.random() * 10000) + 1
    },
  ])


  // useEffect(() => {
  //   try{
  //     const eventValue = window.localStorage.getItem('eventss')
  //     setEvents(JSON.parse(eventValue) ?? [])
  //   }catch(e){
  //     console.log(e)
  //   }

  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem('eventss', JSON.stringify(events));
  // }, [events]);


  const setDefaultAccount= () => {
    setOrganizerAddress(connectedAddress)
  }


  const [showForm, setShowForm] = useState(false);

  const onSubmit= async(e) => {
    e.preventDefault()
    setShowForm(true);
    console.log("startedddd")

    let you = {
      eventOrganizerPaymentAddress: organizerAddress,
      eventOrganizer: organizerName,
      name: eventName,
      description: eventDescription,
      organizerAddedinfo: organizerAddednfo,
      ticketNumber: ticketNumber,
      ticketPrice: ticketPrice,
      eventType: eventType,
      startDate: startDate,
      endDate: endDate,
      locationBooked: eventLocation,
      foodAndDrink: foodAndDrink,
      id: Math.floor(Math.random() * 10000) + 1
    } 

    try{
      console.log("create called")

    console.log("set event called")
    setEvents([you, ...events])
    console.log("set event finished")

    }catch(e){
      console.log(e)
    }  

    setOrganizerAddress("")
    setOrganizerName("")
    setOrganizerAddednfo("")
    setEventName("")
    setEventDescription("")
    setTicketNumber(0)
    setTicketPrice(0)
    setEventType("")
    setEventLocation("")
    setFoodAndDrink(false)
    setStartDate(new Date())
    setEndDate(new Date())

  }

  return (
    <div>

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid d-flex justify-content-around">
          <span class="navbar-text text-dark text-center">
            Here you can view all available events and purchase tickets! Every payment in our native EHT token will be rewarded with a 10% discount. 
          </span>
        </div>
      </nav>
 
      {events.map((event) => (
        <Event event={event}  buyTicket={buyTicket} key={event.id} />
      ))}


      {/* <div className=' container-fluid fixed-bottom py-2 ms-auto d-flex justify-content-end '>

        <button type="button" class="btn btn-dark rounded-pill border border-dark fs-5" onClick={setDefaultAccount} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Create Event
          <i class="bi bi-plus-circle-dotted px-2"></i>
        </button>

      </div> */}

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 className="modal-title " id="formModalLabel">Event Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="eventAddress" className="form-label">Organizer Payment Address </label>
                            <input type="text" className="form-control" id="eventAddress" value={organizerAddress} onChange={(e) => setOrganizerAddress(e.target.value)} />
                            <div id="eventNameHelp" className="form-text">The address that will accept payments</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventName" class="form-label">Event Name</label>
                            <input type="text" class="form-control" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                            <div id="eventNameHelp" class="form-text">The name of your ideal event.</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="eventDescription" class="form-label">Event Description</label>
                            <textarea class="form-control" id="eventDescription" rows="2" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} ></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="organizerName" class="form-label">Organizer Name</label>
                            <input type="text" class="form-control" id="organizerName" value={organizerName} onChange={(e) => setOrganizerName(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Organizer Name or alias.</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="organizerAddedInfo" class="form-label">Organizer Added Info (could be a link, email or phone number)</label>
                            <input type="text" class="form-control" id="organizerAddedInfo" value={organizerAddednfo} onChange={(e) => setOrganizerAddednfo(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            Event Start Date:
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => {setStartDate(date)}}
                                dateFormat="dd/MM/yyyy"
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                            />

                        </div>
                        <div class="mb-3">
                            Event End Date:
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="ticketNumber" class="form-label">Ticket Number</label>
                            <input type="number" class="form-range" min="0" max="100" id="ticketNumber" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Ticket number cannot exceed 300.</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="ticketPrice" class="form-label">Ticket Price</label>
                            <input type="text" class="form-control" id="ticketPrice" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Price of each individual ticket (in cUSD).</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="eventType" class="form-label">Event Type</label>
                            <select class="form-select" aria-label="Default select example" value={eventType} onChange={(e) => setEventType(e.target.value)} >
                                <option selected>Open this select menu</option>
                                <option value="Social">Social</option>
                                <option value="Business">Business</option>
                                <option value="Personal">Personal</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="eventLocation" class="form-label">Event Location</label>
                            <select class="form-select" aria-label="Default select example" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}  >
                                <option selected>Open this select menu</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Lagos">Lagos</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input " id="foodAndDrink" value={foodAndDrink} onChange={(e) => setFoodAndDrink(e.currentTarget.checked)}/>
                            <label htmlFor="foodAndDrink" class="form-check-label">Food and Drink</label>
                            <div id="eventNameHelp" class="form-text">Provision of refreshments will cost an additional amount</div>
                        </div>
                      
                           
                        <div class="d-grid gap-2 mt-5">
                        <input class="btn btn-primary" type="submit" value="Submit" data-bs-dismiss="modal"/>
                        </div>    


                    </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Events