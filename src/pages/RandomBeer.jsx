import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function RandomBeer() {
  const [random, setRandom] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response);
      setRandom(response.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (isFetching === true) {
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <Navbar />
      <section id="random-section">
        <img src={random.image_url} alt="beer-img" width={80} />
        <h3>{random.name}</h3>
        <h5>{random.tagline}</h5>
        <p>
          <b>{random.first_brewed}</b>
        </p>
        <h6>{random.attenuation_level}</h6>
        <p>{random.description}</p>
        <p>
          <b>Contributed by:</b>
          {random.contributed_by}
        </p>
      </section>
    </div>
  );
}

export default RandomBeer;
