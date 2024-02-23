import React, { useState } from "react";
import Nav from "./Nav";
import FilterBar from "./FilterBar";
import HogList from "./HogList";
import AddHog from "./AddHog";

import hogs from "../porkers_data";

function App() {
	const [hogTiles, setHogTiles] = useState(hogs)
	const [sorter, setSorter] = useState('name')
	const [filterBy, setFilterBy] = useState(true)
	const [targetHog, setTargetHog] = useState('')
	const [newHog, setNewHog] = useState({name: "", specialty: "", greased: false, weight: 0, "highest medal achieved": "gold",image: ""})


	function handleFilterChange() {
		setFilterBy(!filterBy)
	}

	function handleSortChange(e) {
		setSorter(e.target.value)
	}

	function handleHogClick(element) {
		setTargetHog(element.id)
	}

	function handleInputChange(e) {
		setNewHog({...newHog, [e.target.name]: e.target.value})
	}
	
	function handleFormSubmit(babyHog) {
		setHogTiles([...hogTiles, babyHog])
		setNewHog({name: "", specialty: "", greased: false, weight: 0, "highest medal achieved": "gold",image: ""})
	}

	return (
		<div className="App">
			<Nav />
			<FilterBar sorter={sorter} onSortChange={handleSortChange} filterBy={filterBy} onFilterChange={handleFilterChange}/>
			<HogList hogTiles={hogTiles} sorter={sorter} filterBy={filterBy} onHogClick={handleHogClick} targetHog={targetHog}/>
			<AddHog onInputChange={handleInputChange} newHog={newHog} onFormSubmit={handleFormSubmit}/>
			<div id="footer"></div>
		</div>
	);
}

export default App;
