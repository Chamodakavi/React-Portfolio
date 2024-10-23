import React from 'react'

const EventCard = ({event}) => {

    return(
        <div className='col-lg-4'>
            <div class="card py-5">
                <div class="card-body">
                    <h5 className=''>{event.title1}</h5>
                    <h5 class="card-title my-4 text-primary">{event.title2}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{event.date}</h6>
                    <p class="card-text">
                        {event.venue}
                    </p>
                    <a href="" className="btn btn-primary">Attend Event</a>
                </div>
            </div>
        </div>
    )
}

export default EventCard;