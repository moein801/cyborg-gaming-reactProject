import React from 'react'
import PopularItem from './popularItem/popularItem'
import "./populrSection.css"
import Title from '../title/title' 
import "../../innerWrapper.css"

export default function PopularSection() {
  return (
    <section className='popular'>

        <div className="inner-wrapper">

        <div className="popular__header">

        <Title/>
            
            
        </div>

        <div className="popular__content">

            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>

            
            
        
        </div>

            <a href="#" className="popular__link">Discover Popular</a>
            
            
        </div>
        
        
        
    </section>
  )
}
