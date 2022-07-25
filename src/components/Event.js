import React from 'react'

const Event = ({ event }) => {
    const eventTypes = ["social", "personal", "business"]
    const location = ["Lagos", "Abuja", "Enugu"]
    // py-1 px-5 

    return (
        <div>
            <div class="card border-dark w-75 mx-auto my-4">
                <div class="card-header bg-secondary">
                    <div className='ms-auto d-flex justify-content-end'>
                        Ticket Count: <strong className='px-1'> 99</strong>
                        <div className='px-2'></div>
                        <span class="border-start px-2 border-2 border-dark"></span>
                        Ticket Price: <strong className='px-1'> 20 EHT</strong>
                    </div>
                </div>
                <div class="card-body shadow-lg">
                    <div class="card-title row"> 
                       <h5 className='col'>Special Photography Class</h5>
                       <div className='col d-flex justify-content-end fw-normal'> 
                        <i class="bi bi-calendar-heart-fill mx-3"></i>
                        Mon 13th - Friday 17th
                       </div>
                    </div>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <h2 class="accordion-header mb-4" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Additional Information
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            <div>
                                Organizer Name:
                                <br></br>
                                Organizer Added Info: 
                                <br></br>
                                Location Booked:
                                <br></br>
                                Food and Drink: Provided, please check the menu <a href='e'>here</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary">Buy Ticket</a>
                </div>
            </div>
        </div>
    )
}

export default Event