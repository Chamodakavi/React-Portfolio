import React from 'react'
import { useState } from 'react'
import './App.css'

const Form = ({fshow}) => {

    const [isFormVisible,setIsFormVisible] = useState(true);
    const [show,setShow] = useState(false);


    const handleClose = () => {
      setIsFormVisible(false)
      fshow(show)
    }



    return(

        <div className="container">
            
            <form className="form" style={{ display: isFormVisible ? 'block' : 'none' }}>

            <i 
                class="close-btn bi bi-x"
                onClick={handleClose}
            
            ></i>

                <div className="mb-3">
                    <label for="name" className="form-label">Name :</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email :</label>
                    <input type="email" className="form-control" id="email" required/>
                </div>
                <div class="mb-3">
                    <label for="msg" className="form-label">Message :</label>
                    <input type="text" className="form-control" id="msg" required/>
                </div>
                
                <button className='btn btn-primary'>Contact Me</button>
            </form>
        </div>

    )
}

export default Form;