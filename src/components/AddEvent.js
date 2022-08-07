import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { useState, useEffect } from 'react';

const AddEvent = () => {
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



    return (
        <div>
            <div className='text-center'>
                <h2>Event Form</h2>
                <p>Placeholder nice thing to say to people while they fill they shit </p>
                <p>{organizerAddress} {organizerName} {organizerAddednfo} {eventName} {eventDescription} {ticketNumber} {ticketPrice}
                  {eventType} {eventLocation} {foodAndDrink.toString()} {startDate.toDateString().toString()} {endDate.toDateString().toString()}
                </p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 center border'>
                    <form>
                        <div class="mb-3">
                            <label for="eventAddress" class="form-label">Organizer Payment Address <i className="bi bi-coin pe-2 ps-5">copy current address</i></label>
                            <input type="text" class="form-control" id="eventAddress" value={organizerAddress} onChange={(e) => setOrganizerAddress(e.target.value)} />
                            <div id="eventNameHelp" class="form-text">The address that will accept payments</div>
                        </div>
                        <div class="mb-3">
                            <label for="eventName" class="form-label">Event Name</label>
                            <input type="text" class="form-control" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                            <div id="eventNameHelp" class="form-text">The name of your ideal event.</div>
                        </div>
                        <div class="mb-3">
                            <label for="eventDescription" class="form-label">Event Description</label>
                            <textarea class="form-control" id="eventDescription" rows="2" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="organizerName" class="form-label">Organizer Name</label>
                            <input type="text" class="form-control" id="organizerName" value={organizerName} onChange={(e) => setOrganizerName(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Organizer Name or alias.</div>
                        </div>
                        <div class="mb-3">
                            <label for="organizerAddedInfo" class="form-label">Organizer Added Info (could be a link, email or phone number)</label>
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
                            <label for="ticketNumber" class="form-label">Ticket Number</label>
                            <input type="number" class="form-range" min="0" max="100" id="ticketNumber" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Ticket number cannot exceed 300.</div>
                        </div>
                        <div class="mb-3">
                            <label for="ticketPrice" class="form-label">Ticket Price</label>
                            <input type="text" class="form-control" id="ticketPrice" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)}  />
                            <div id="eventNameHelp" class="form-text">Price of each individual ticket (in cUSD).</div>
                        </div>
                        <div class="mb-3">
                            <label for="eventType" class="form-label">Event Type</label>
                            <select class="form-select" aria-label="Default select example" value={eventType} onChange={(e) => setEventType(e.target.value)} >
                                <option selected>Open this select menu</option>
                                <option value="Social">Social</option>
                                <option value="Business">Business</option>
                                <option value="Personal">Personal</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="eventLocation" class="form-label">Event Location</label>
                            <select class="form-select" aria-label="Default select example" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}  >
                                <option selected>Open this select menu</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Lagos">Lagos</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input form-control" id="foodAndDrink" value={foodAndDrink} onChange={(e) => setFoodAndDrink(e.currentTarget.checked)}/>
                            <label for="foodAndDrink" class="form-check-label">Food and Drink</label>
                            <div id="eventNameHelp" class="form-text">Provision of refreshments will cost an additional amount</div>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}

<div id="passwordHelpBlock" class="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>



export default AddEvent 