import React from 'react';
import Cv from './mycv.pdf';


const CVDownload = () => {
    
    return(

        <div className="container text-center my-4">
            <a
                name=""
                id="downloadCVButton"
                class="btn btn-primary mb-5"
                href={Cv}
                download="MyCV"
            >Here is my CV
                </a>
        </div>
    );
}
export default CVDownload;