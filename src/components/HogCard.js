import React from 'react'
import hogs from '../porkers_data'

function HogCard({ targetHog }) {
    const featuredHog = hogs.find(hog => hog.name === targetHog)

    return (
        <div className='bigPiggyCard'>
            <h2>{featuredHog.name}</h2>
            <img src={featuredHog.image} className='bigPiggy'/>
            <h4>Specialty:</h4>
            <p>{featuredHog.specialty}</p>
            <h4>Weight:</h4>
            <p>{featuredHog.weight} lbs.</p>
            <h4>Greased?</h4>
            <p>{featuredHog.greased ? 'Yes' : 'No'}</p>
            <h4>Highest Medal Achieved</h4>
            <p>{featuredHog['highest medal achieved']}</p>
        </div>
    )
}

export default HogCard