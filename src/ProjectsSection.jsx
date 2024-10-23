import React from 'react'
import Project from './Project';

import TaxiImg from './savetxi.webp';
import ExpertImg from './expert.webp';
import PayBoxImg from './paybox.webp';

const ProjectData = [
    {
      "img": TaxiImg,
      "Title": "WowTaxi",
      "Desc": "UX design of the WowTaxi company's website, iOS and Android apps by creating easy-to-use and plain user experience for the customers.",
      "color" : "bg-warning",
      "font" : "text-warning"
    },
    {
      "img": ExpertImg,
      "Title": "Block Expert",
      "Desc": "Server side authentication web application,primary double spend protecting (language: nodeJS, database: levelDB), development of MVP with consensus and distributed ledger (via p2p).",
      "color" : "bg-primary",
      "font" : "text-primary"
    },
    {
      "img": PayBoxImg,
      "Title": "PayBox",
      "Desc": "Built a scalable, fault-tolerant architecture solution for a MESOS-based web server. Processing design, development and implementation.",
      "color" : "bg-danger",
      "font" : "text-danger"
    }
  ];

const ProjectSection = () => {


    return(

        <section id="projects" className="py-5">
            <div className="container">
                <div className='text-center'>
                    <h1>Projects</h1>
                    <p className="lead">
                    Have a look at some of the rolled-out projects I'm proud of:
                    </p>
                    {
                        ProjectData.map((parameter)=>(
                                <Project project={parameter}/>
                            )
                        )
                    }
                </div>
            </div>
        </section>

    );

}

export default ProjectSection;