import React from 'react'
import UserImg from './5d0756c53cf8440024cca0fd_optimized_1140.webp';
import SkillCard from './SkillCard';

const cardData = [
    {
      "Title1": "Back-end Developer",
      "desc1": "Develop business logic and back-end system to support the product, create API, have vastexperience with version control systems.",
      "Title2": "Languages:",
      "desc2": "PHP, Python, Ruby, Java, Perl",
      "Title3": "Technologies Stack:",
      "desc3": "Symfony MySQL AngularJS PostgreSQL"
    },
    {
      "Title1": "Front-end Developer",
      "desc1": "I code things from scratch, and gracefully bring the ideas to life and to the bowser, paying maximal attention to your vision of the product.",
      "Title2": "My Tools:",
      "desc2": "HTML, JavaScript, Slim, CSS,Pug",
      "Title3": "Technologies Stack:",
      "desc3": "Symfony MySQL AngularJS PostgreSQL"
    },
    {
      "Title1": "Designer",
      "desc1": "I create both easy and simple, and more complex and detailed prototypes. Simplicity, convenience, usefulness and effectiveness at the same time.",
      "Title2": "Languages:",
      "desc2": "PHP, Python, Ruby, Java, Perl",
      "Title3": "Technologies Stack:",
      "desc3": "Symfony MySQL AngularJS PostgreSQL"
    }
  ];


const Welcome = () => {

    return(

        <>
            <section id='aboutme' className="p-5 bg-dark">
                <div className="container text-light text-center">
                    <h1 className=''>John Smith</h1>
                    <p className="lead">
                    I’m a full-stack developer with great experience and passion for coding and building plain interfaces. I have a manic love for great high-loaded projects. Plus, I’m an easy-going person and fit in any team. I work remotely and save your budget on my workplace. So, if you have a complicated task, you’ve found the right person.
                    </p>
                    <img src={UserImg} alt="" className='img-fluid w-25' />
                </div>
            </section>

            <section id="skills" className='p-5 '>
                <div className="container text-center">
                    <div class="c-skills-container bg-primary">
                        <h1 class="fw-bold py-5">Skills</h1>
                    </div>

                    <div className="row c-skill-row g-4">

                            {cardData.map(
                                (parameterCardData)=>(             
                                        <div className="col-md-6 col-lg-4 ">
                                            <SkillCard card={parameterCardData}/>
                                        </div>  
                                )
                            )}
                    </div>

                    
                </div>
                
            </section>
        </>

        

    );

}
export default Welcome;