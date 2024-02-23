import React from 'react'

function AddHog({ newHog, onInputChange, onFormSubmit }) {
    return (
        <div id='form'>
            <form onSubmit={e => {
                e.preventDefault()
                onFormSubmit(newHog)
                }}>
                <h3>Add a new pig!</h3>
                <label>Name:<input type='text' name='name' value={newHog.name} onChange={onInputChange}></input></label>
                
                <label>Image:<input type='text' name='image' value={newHog.image} onChange={onInputChange}></input></label>
                
                <label>Specialty:<input type='text' name='specialty' value={newHog.specialty} onChange={onInputChange}></input></label>
                
                <label>Weight:<input type='number' name='weight' value={newHog.weight} onChange={onInputChange}></input></label>
                
                <label>Greased?<input type='checkbox' name='greased' value={newHog.weight} onChange={onInputChange}></input></label>
                
                <label>Highest Medal Awarded:
                    <select value={newHog['highest medal awarded']}>
                        <option value='gold'>Gold</option>
                        <option value='silver'>Silver</option>
                        <option value='bronze'>Bronze</option>
                    </select>
                </label>
                
                <button type='submit' id='formSubmit'>Add hog</button>

            </form>
        </div>
    )
}

export default AddHog