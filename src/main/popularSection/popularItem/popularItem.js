import React from 'react'
import "./popularItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

export default function PopularItem() {
  return (
    <div className='popular-box'>

        <img src="./images/popularItems/popular-01.jpg" alt="popular img" className="poular-box__img" />

        <div className="popular-box__details">

            <div className="popular-box__details-top">
                <span className="popular-box__title">Fortnite</span>
                <div className="popular-box__rating">
                    <FontAwesomeIcon className="fa fa-star popular-box__rating-icon" icon={faStar}></FontAwesomeIcon>
                    <span className=" popular-box__rating-number">4.8</span>

                </div>
            </div>
            <div className="popular-box__details-bottom">
                <span className="popular-box__subtitle">Sandbox</span>
                <div className="popular-box__download">
                    <FontAwesomeIcon className="fa fa-download popular-box__download-icon" icon={faDownload}></FontAwesomeIcon>
                    <span className="popular-box__download-number">2.3M</span>
                </div>
            </div>


            
            
        </div>

        
        
    </div>
  )
}
