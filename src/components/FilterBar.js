import React from 'react'

function FilterBar({ onSortChange, sorter, filterBy, onFilterChange}) {
    return (
        <div className='filterBar'>
            <label>Greased</label>
            <input type='checkbox' onChange={onFilterChange} value={filterBy}></input>
            <label>Sort by</label>
            <select onChange={onSortChange} value={sorter}>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
        </div>
    )
}

export default FilterBar