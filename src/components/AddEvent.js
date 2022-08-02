import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 

const AddEvent = () => {
    return (
        <div>
            <div className='text-center'>
                <h2>Event Form</h2>
                <p>Placeholder nice thing to say to people while they fill they shit </p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 center border'>
                    <form>
                        <div class="mb-3">
                            <label for="eventAddress" class="form-label">Organizer Payment Address <i className="bi bi-coin pe-2 ps-5">copy current address</i></label>
                            <input type="text" class="form-control" id="eventAddress" />
                            <div id="eventNameHelp" class="form-text">The address that will accept payments</div>
                        </div>
                        <div class="mb-3">
                            <label for="eventName" class="form-label">Event Name</label>
                            <input type="text" class="form-control" id="eventName" />
                            <div id="eventNameHelp" class="form-text">The name of your ideal event.</div>
                        </div>
                        <div class="mb-3">
                            <label for="eventDescription" class="form-label">Event Description</label>
                            <textarea class="form-control" id="eventDescription" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="organizerName" class="form-label">Organizer Name</label>
                            <input type="text" class="form-control" id="organizerName" />
                            <div id="eventNameHelp" class="form-text">Organizer Name or alias.</div>
                        </div>
                        <div class="mb-3">
                            <label for="organizerName" class="form-label">Organizer Added Info (could be a link, email or phone number)</label>
                            <input type="text" class="form-control" id="organizerName" />
                        </div>
                        <div class="mb-3">
                            <label for="ticketNumber" class="form-label">Ticket Number</label>
                            <input type="number" class="form-range" min="0" max="100" id="ticketNumber" />
                            <div id="eventNameHelp" class="form-text">Ticket number cannot exceed 100.</div>
                        </div>
                        <div class="mb-3">
                            <label for="ticketPrice" class="form-label">Ticket Price</label>
                            <input type="text" class="form-control" id="ticketPrice" />
                            <div id="eventNameHelp" class="form-text">Price of each individual ticket.</div>
                        </div>
                        <div class="mb-3">
                            <label for="ticketPrice" class="form-label">Event Type</label>
                            <select class="form-select" aria-label="Default select example">                          
                                <option value="1">Social</option>
                                <option value="2">Business</option>
                                <option value="3">Personal</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="ticketPrice" class="form-label">Event Location</label>
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">Abuja</option>
                                <option value="2">Enugu</option>
                                <option value="3">Lagos</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="eventName" />
                            <label for="eventName" class="form-check-label">Food and Drink</label>        
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