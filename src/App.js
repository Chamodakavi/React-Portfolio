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

const App = () => {

    return(

        <> 
            <NavBar/>
            <Welcome/>
            <CVDownload/>
            <ProjectsSection/>
            <Footer/>
        </>
    
    );

}


export default App;