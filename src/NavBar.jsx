import React from 'react';

const NavBar = () => {

    return(

        <nav class="navbar navbar-expand-lg bg-body-tertiary pt-3 fixed-top">
            <div class="container ">
                <a class="c-nav-title navbar-brand ">Calvino.</a>


                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu" 
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="navbar-collapse collapse" id="navmenu">
                <ul class="navbar-nav ms-auto fw-bold">
                    <li class="nav-item">
                        <a href="#aboutme" class="nav-link">About me</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Events</a>
                    </li>
                </ul>
            </div>

            </div>
        </nav>

    )

}

export default NavBar;