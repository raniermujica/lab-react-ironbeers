import React from 'react'
import axios from "axios"
import Navbar from "../components/Navbar"
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewBeer() {
  //Estados iniciales del formulario
  const [nameInput, setNameInput] = useState("")
  const [taglineInput, setTaglineInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [firstBrewedInput, setFirstBrewedInput] = useState("")
  const [brewersTipsInput, setBrewersTipsInput] = useState("")
  const [attenuationLevelInput, setAttenuationLevelInput] = useState(null)
  const [contributedInput, setContributedInput] = useState("")
 
  //cambios de tipo event ocasionados por el usuario 
  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleTaglineChange = (event) => setTaglineInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleFirstBrewedChange = (event) => setFirstBrewedInput(event.target.value)
  const handleBrewersTipsChange = (event) => setBrewersTipsInput(event.target.value)
  const handleAttenuationChange = (event) => setAttenuationLevelInput(event.targe.value)
  const contributedChange = (event) => setContributedInput(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBeer = {
      name: nameInput,
      tagline: taglineInput,
      description: descriptionInput,
      first_brewed: firstBrewedInput,
      brewers_tips: brewersTipsInput,
      attenuation_level: attenuationLevelInput,
      contributed_by: contributedInput
    }

    try {
      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      console.log(response)
      

    } catch(err) {
      console.log(err)
    }

  }

  const handleChangeName = (event) => {
    setNameInput(event.target.value)
  }
  
  const handleChangeTagline = (event) => {
    setTaglineInput(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescriptionInput(event.target.value)
  }

  const handleChangeFirstBrewed = (event) => {
    setFirstBrewedInput(event.target.value)
  }

  const handleChangeBrewersTips = (event) => {
    setBrewersTipsInput(event.target.value)
  }

  const handleChangeAttenuationLevel = (event) => {
    setAttenuationLevelInput(event.target.value)
  }
  
  const handleChangeContributed = (event) => {
    setContributedInput(event.target.value)
  }

  return (
    <div>
    <Navbar/>

    <form id="form-style">
    
        <label htmlFor="name" >Name:</label>
        <input value={nameInput} type="text" name="name" onChange={handleChangeName} />
        <br />
        <label htmlFor="tagline" >Tagline:</label>
        <input value={taglineInput} type="text" name="tagline" onChange={handleChangeTagline}/>
        <br />
        <label htmlFor="description" >Description:</label>
        <input value={descriptionInput} type="text" name="description" onChange={handleChangeDescription}/> 
        <br />
        <label htmlFor="first_brewed" >First Brewed:</label>
        <input value={firstBrewedInput} type="text" name="first_brewed"  onChange={handleChangeFirstBrewed}/>
        <br />
        <label htmlFor="brewers_tips" >Brewers Tips:</label>
        <input value={brewersTipsInput} type="text" name="brewers_tips"  onChange={handleChangeBrewersTips}/>
        <br />
        <label htmlFor="attenuation_level" >Attenuation level:</label>
        <input value={attenuationLevelInput} type="text" name="attenuation_level"  onChange={handleChangeAttenuationLevel}/> 
        <br />
        <label htmlFor="contributed_by" >Contributed by:</label>
        <input value={contributedInput} type="text" name="contributed_by" onChange={handleChangeContributed}/> 
        <br />
        
        <button onClick={handleSubmit} >ADD NEW</button>
      </form>


    </div>
  )
}

export default NewBeer