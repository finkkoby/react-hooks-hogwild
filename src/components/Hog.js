import React from 'react'

function Hog({ object, onHogClick}) {
    return (
        <div className='card pigTile' id={object.name} onClick={(e) => {
            if(e.target.parentNode.className === 'card pigTile') {
                onHogClick(e.target.parentNode)
            } else {
                onHogClick(e.target)
            }
        }}>
            <img src={object.image} />
            <h3>{object.name}</h3>
        </div>
    )
}

export default Hog