import React, { useState } from 'react'

const Event = ({ event, buyTicket }) => {

    let fdcontent;
    if (event.foodAndDrink) {
        fdcontent = <p>Food and Drink: Provided, please check the menu <a href='menu' t>here</a></p>
    } else {
        fdcontent = <p>Food and Drink: This event will not provide refreshments</p>
    }

    const [yourTicketCount, setYourTicketCount] = useState(0)
    const [ticketCount, setTicketCount] = useState(event.ticketNumber)

    const buyEventTicket = async() => {
        await buyTicket();
        setYourTicketCount(yourTicketCount + 1)
        event.ticketNumber -= 1
        console.log(ticketCount)
    }

    return (
        <div>
            <div class="card border-dark w-75 mx-auto my-4">
                <div class="card-header bg-secondary">
                    <div className='ms-auto d-flex justify-content-end'>
                        <div className='me-auto'>
                            {/* <strong >Room Id: {event.id}</strong> */}
                            {ticketCount > 0 &&
                                <strong>
                                    Purchased tickets: {yourTicketCount}
                                </strong>
                            }
                        </div>
                        Ticket Count: <strong className='px-1'>{event.ticketNumber}</strong>
                        <div className='px-2'></div>
                        <span class="border-start px-2 border-2 border-dark"></span>
                        Ticket Price: <strong className='px-1'> {event.ticketPrice}cUSD</strong>
                    </div>
                </div>
                <div class="card-body shadow-lg">
                    <div class="card-title row">
                        <h5 className='col'>{event.name}</h5>
                        <div className='col d-flex justify-content-end fw-normal'>
                            <i class="bi bi-calendar-heart-fill mx-3"></i>
                            {/* Mon 13th - Fri 17th */}
                            {new Date(event.startDate).toDateString()} - {new Date(event.endDate).toDateString()}
                        </div>
                    </div>
                    <p class="card-text">{event.description}</p>
                    <h2 class="accordion-header mb-4" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Additional Information
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            <div>
                                Organizer Name: {event.eventOrganizer}
                                <br></br>
                                Organizer Added Info: {event.organizerAddedinfo}
                                <br></br>
                                Location Booked: {event.locationBooked}
                                <br></br>
                                {fdcontent}

                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary ms-auto" onClick={buyEventTicket}>Buy Ticket</a>

                </div>
            </div>
        </div>
    )
}

export default Event
