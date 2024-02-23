import React from 'react'
import Hog from './Hog'
import HogCard from './HogCard'

function HogList({ hogTiles, filterBy, sorter, onHogClick, targetHog, onHideClick }) {
    
    function sortHogs(array) {
        return array.sort((a, b) => {
            if(a[sorter] < b[sorter]) {
                return -1
            } else if(a[sorter] > b[sorter]) {
                return 1
            } else {
                return 0
            }
        })
    }
    
    const sorted = sortHogs(hogTiles)

	const jsxHogs = sorted.map(hog => {
        if(filterBy || hog.greased) return <Hog object={hog} key={hog.name} onHogClick={onHogClick} onHideClick={onHideClick}/>
        else return 
    })

    return (
        <div className="ui link cards">
            {targetHog === '' ? jsxHogs : <HogCard targetHog={targetHog}/>}
        </div>
    )
}

export default HogList