import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch("http://localhost:3001/pets")
    .then (resp => resp.json())
    .then (data => setPets(data))
  }, [])

  function onChangeType(filterType){
    console.log(filterType)
    setFilters({type: filterType})
    const filteredPets = pets.filter((pet) => pet.type === filterType)
    setPets(filteredPets)
  }
console.log(pets)

function onFindPetsClick(){
  console.log(`Looking for pets`)
  console.log(Object.values(filters))
 if (Object.values(filters).toString() === "all"){
  fetch("http://localhost:3001/pets")
  .then (resp => resp.json())
  .then (data => setPets(data))
 }
 else {
  fetch(`http://localhost:3001/pets?type=${Object.values(filters).toString()}`)
  .then (resp => resp.json())
  .then (data => setPets(data))
 } 
}

function onAdoptPet(id){
  console.log(id)
  const adoptedPets = pets.filter((pet) => pet.id !== id)
  setPets(adoptedPets)
}

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
