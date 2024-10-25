import React from 'react'
import { useState } from 'react';

import Form from './Form';
import './App.css'

const ContactMe = () => {

    const [showForm, setShowForm] = useState(false);
   
    const viewForm = () => (
        setShowForm(!showForm)
    )

    const handleClose = (show) => {
        setShowForm(show)
    };

    return(

       <>
            <section className='bg-success py-5'>
                <div className="container text-light text-center">
                    <h1>Interested in working together?</h1>
                    <p className="lead">
                    You can trust your project in my expert hands. I'm always eager to do something nice and complicated. Let's discuss all the features in a private conversation.
                    </p>
                    <div 
                        className='btn btn-primary'
                        onClick={viewForm}
                    >Contact Me</div>
                    </div>
            </section>
            {
                showForm && (
                <Form fshow={handleClose}/>
            ) 
                
             }
            
       </>
    )
}

export default ContactMe;