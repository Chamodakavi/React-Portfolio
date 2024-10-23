import React from 'react'

const Footer = () => {

    return(

        <>
            <footer className='footer bg-primary mt-5'>
               <div className='container py-5 text-center'>
                    <div>
                        <h1>Alex Williams</h1>
                    </div>
                    <div className='mt-4 fw-bold d-md-block fs-5 d-flex flex-column'>
                        <a href="#aboutme" className='text-light mx-3 my-2 footer-links'><span className=''>About me   </span>  </a>
                        <a href="#skills" className='text-light mx-3 my-2 footer-links'><span className=''>Skills     </span>  </a>
                        <a href="#projects" className='text-light mx-3 my-2 footer-links'><span className=''>Projects   </span>  </a>
                        <a href="#experience" className='text-light mx-3 my-2 footer-links'><span className=''>Experience </span>  </a>
                        <a href="#events" className='text-light mx-3 my-2 footer-links'><span className=''>Events     </span>  </a>
                    </div>

               </div>
            </footer>
        </>

    );
}

export default Footer;