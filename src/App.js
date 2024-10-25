import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import NavBar from './NavBar.jsx';
import Welcome from './welcome.jsx';
import Footer from './Footer.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import CVDownload from './CVDownload.jsx';
import ContactMe from './ContactMe.js';
import Events from './Events.jsx';
import Form from './Form.js';

const App = () => {

    return(

        <> 
            <NavBar/>
            <Welcome/>
            <CVDownload/>
            <ProjectsSection/>
            <ContactMe/>
            <Events/>
            <Footer/>
        </>
    
    );

}


export default App;