import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Event from './Event'

const Events = () => {
  const eventTypes = ["social", "personal", "business"]
  const location = ["Lagos","Abuja", "Enugu"]

  const [events, setEvents] = useState([
    {
      eventOrganizer: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
      name: "Photography Workshop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "could be a link, optional",
      ticketNumber: 56,
      ticketPrice: 0.005,
      eventType: eventTypes[0],
      datesBooked: [new Date(), new Date()],
      locationBooked: location[2],
      foodAndDrink : true
    },
    {
      eventOrganizer: "0xf977814e90da44bfa03b6295a0616a897441acec",
      name: "Wedding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "could be a link, optional",
      ticketNumber: 100,
      ticketPrice: 0.005,
      eventType: eventTypes[1],
      datesBooked: [new Date(), new Date()],
      locationBooked: location[1],
      foodAndDrink : true
    },
    {
      eventOrganizer: "0x07ee55aa48bb72dcc6e9d78256648910de513eca",
      name: "Business Conference",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "could be a link, optional",
      ticketNumber: 89,
      ticketPrice: 1,
      eventType: eventTypes[2],
      datesBooked: [new Date(), new Date()],
      locationBooked: location[0],
      foodAndDrink : false
    },
    {
      eventOrganizer: "0xa7efae728d2936e78bda97dc267687568dd593f3",
      name: "Orgy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "could be a link, optional",
      ticketNumber: 100,
      ticketPrice: 0.001,
      eventType: eventTypes[0],
      datesBooked: [new Date(), new Date()],
      locationBooked: location[2],
      foodAndDrink : true
    },
    {
      eventOrganizer: "0xe92d1a43df510f82c66382592a047d288f85226f",
      name: "Laboratory Experiment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tellus blandit magna tincidunt ullamcorper. Phasellus tempus orci et facilisis vehicula. Etiam suscipit convallis libero, et suscipit tellus posuere in. Aliquam elementum.",
      organizerAddedinfo: "could be a link, optional",
      ticketNumber: 37,
      ticketPrice: 0.035,
      eventType: eventTypes[2],
      datesBooked: [new Date(), new Date()],
      locationBooked: location[2],
      foodAndDrink : false
    },
  ])

  return (
    <div>

      {/* <Event event={events} /> */}
      {events.map((event) => (
        <Event event={event}/>
      ))}

      <div className=' container-fluid fixed-bottom py-2 ms-auto d-flex justify-content-end '>

        <button type="button" class="btn btn-dark rounded-pill border border-dark fs-5 " onC>
          Create Event
          <i class="bi bi-plus-circle-dotted px-2"></i>
        </button>

      </div>

    </div>
  )
}

export default Events