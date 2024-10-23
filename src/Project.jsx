import React from 'react';

const Project = ({project}) => {

    return(

        <div class="row my-5">
            <div class="col-lg-6 c-project-item">
                <div class={`c-item-img ${project.color} rounded mx-4`}>
                        <img src={project.img} class="img-fluid c-project-img" alt=""/>
                </div>
            </div>

            <div class={` col-lg-6 c-project-item-description ${project.color} rounded d-flex align-items-center`}>

                <div class="c-project-description bg-light p-5">
                        <h1 class={`text-center ${project.font}`}>{project.Title}</h1>
                            <p class="lead">{project.Desc}</p>
                            <a href="#" class={`btn text-light ${project.color}`}>View Project</a>
                </div>
            </div>
        </div>
// <h1 class={`text-center text-warning ${project.color}`}>{project.Title}</h1>
    );
}

export default Project;