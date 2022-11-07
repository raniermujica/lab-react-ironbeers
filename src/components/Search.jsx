import React from 'react'
import axios from "axios"
import {useState} from "react"

function Search() {

    const [searchInput, setSearchInput] = useState("")

    const handleChangeSearch = (event) => setSearchInput(event.target.value)

    useEffect(() => {
        getSearch();
      }, []);

    const getSearch = async() => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`)
            console.log(response)
            setSearchInput(response)

        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
<h5>Search</h5>

<input type="text" name="search" value={searchInput} onChange={handleChangeSearch}/>
    </div>
  )
}

export default Search