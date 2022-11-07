import axios from "axios";
import Navbar from "../components/Navbar";
import Search from "../components/Search"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";

function AllBeers() {
  //1. Crear estado
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  //2. LLamar a la Api
  useEffect(() => {
    getData();
  }, []);

  //2.1 Creamos la función async
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setList(response.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
    }
  };

  //3. Cláusula de guardia
  if (isFetching === true) {
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Search/>
      </div>
      <section id="section-list">
        <div id="beer-list">
          {list.map((eachBeer) => {
            return (
              <>
                <img src={eachBeer.image_url} alt="each-beer" width={80} />
                <h4>
                  <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id}>{eachBeer.name}</Link>
                </h4>
                <h6>{eachBeer.tagline}</h6>
                <p>
                  <b>Created by:</b> {eachBeer.contributed_by}
                </p>
              </>
            );
          })}
        </div>
        <div id="beer-details">
          {/* <BeerDetails
          key={eachBeer._id}
          eachBeerDetail={eachBeer}
          /> */}
        </div>
      </section>
    </div>
  );
}

export default AllBeers;
