import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [plantSearch, setPlantSearch] = useState("")

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => setPlants(data))
  }, [])

  function handleAddPlant(newPlant){
    const newPlantList = ([...plants, newPlant])
    setPlants(newPlantList)
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search plantSearch={plantSearch} setPlantSearch={setPlantSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
