import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect( ()=> {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantArray(data))
  }, [])

  function onAddPlant(newPlant) {
    const updatedPlantArray = [...plantArray, newPlant]
    setPlantArray(updatedPlantArray)
  }

  const displayPlants = plantArray.filter((plant) => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <PlantList plantArray={displayPlants} />
    </main>
  );
}

export default PlantPage;
