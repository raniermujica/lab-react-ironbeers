import React from 'react'
import {Link} from "react-router-dom"
import beers from '../assets/beers.png'
import newBeer from '../assets/newBeer.png'
import randomBeer from '../assets/randomBeer.png'



function Home() {
  return (
    <div>
      <header>
      <h1>Welcome to Iron Beers</h1>
      </header>
      
    <div id="home-section">
      <img src={beers} alt="all-beers" width={350}/>
      <h2 class="h2-home"><Link to="/beers" class="link-h2">All Beers</Link></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br />
      <img src={randomBeer} alt="random-beer" width={350}/>
      <h2 class="h2-home"><Link to="/random-beer" class="link-h2">Random Beers</Link></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br />
      <img src={newBeer} alt="new-beer" width={350} />
      <h2 class="h2-home"><Link to="/new-beer" class="link-h2">New Beer</Link></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Home