import React from 'react'



const SkillCard = ({card}) => {

    return(
        <div className='card mx-2 p-3'>
            <div class="h1 my-3">
                <i class="bi bi-bezier"></i>
            </div>
            <h5 class="card-title">{card.Title1}</h5>
            <p class="card-text">{card.desc1}</p>
            <h5 class="c-title-color card-title">{card.Title2}</h5>
            <p class="card-text">{card.desc2}</p>
            <h5 class="c-title-color card-title">{card.Title3}</h5>
            <ul className='card-ul'>
                <li>Symfony</li>
                <li>MySQL</li>
                <li>Angular JS</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
    )

}

export default SkillCard;