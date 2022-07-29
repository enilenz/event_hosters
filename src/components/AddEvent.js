import React from 'react'

const AddEvent = () => {
    return (
        <div>
            <div className='row justify-content-center '>
                <div className='col-6 center border border-dark  '>
                    <div class="mb-3 py-2">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-1" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3 py-2">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent 