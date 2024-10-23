import React from 'react'
import EventCard from './EventCard';

const EventData = [
    {
      "title1": "Conference",
      "title2": "WebDev Conference",
      "date": "05 July Friday",
      "venue" : `Global Arena, tral Hy San Francisco 09:00 - 18:00`
    },
    {
     "title1": "Panel Discussion",
      "title2": "Backend Security Issues",
      "date": "20 July Saturday",
      "venue" : "Central Hyde Gallery, Brooklyn, NY 10:30 - 14:00"
    },
    {
      "title1": "Workshop",
      "title2": "UX Workshop",
      "date": "14 August Wednesday",
      "venue" : "Fellows Riverside Garden, Columbus 19:00 - 21:30"
    }
  ];

const Events = () =>{

    return(
        <section id="events" className='my-5 text-center'>
            <div className="container">
                <h1>Events With Me</h1>
                <p className="lead">
                I regularly take part in talks, forums, conferences and panel discussions to share experience, communicate with colleagues and find new opportunities. So you can always say hi!
                </p>
                <div className="row">
                    {
                        EventData.map((parameter)=>(
                            <EventCard event={parameter}/>
                        ))
                    }
                </div>
            </div>


        </section>
    )

}

export default Events;