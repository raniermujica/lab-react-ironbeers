import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllBeers from "../pages/AllBeers";

function BeerDetails(props) {
  const [details, setDetails] = useState(null);
//   const [isFetching, setIsFetching] = useState(true);

const {data} = props.eachBeerDetail


//   const { name } = useParams();

//   useEffect((props) => {
//     getInfo();
//   }, []);

//   const getInfo = async () => {
//     try {
//       const response = await axios.get(
//         "https://ih-beers-api2.herokuapp.com/beers"
//       );
//       console.log(response);

//       setDetails(response.data);
//       setIsFetching(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (isFetching === true) {
//     return <h3>...buscando</h3>;
//   }

  return (
    <div>
   
      <img src={data.image_url} alt="beer-img" width={80} />
      <h3>{data.name}</h3>
      <h5>{data.tagline}</h5>
      <p>
        <b>{data.first_brewed}</b>
      </p>
      <h6>{data.attenuation_level}</h6>
      <p>{data.description}</p>
      <p>
        <b>Contributed by:</b>
        {data.contributed_by}
      </p>
      </div>
    
  );
}

export default BeerDetails;
