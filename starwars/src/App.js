import React, {useState, useEffect} from "react";
import './App.css';

// import axios 
import axios from "axios"; 

// example person 
// {
//   "name": "Luke Skywalker",
//   "height": "172",
//   "mass": "77",
//   "hair_color": "blond",
//   "skin_color": "fair",
//   "eye_color": "blue",
//   "birth_year": "19BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.co/api/planets/1/",
//   "films": [
//     "https://swapi.co/api/films/2/",
//     "https://swapi.co/api/films/6/",
//     "https://swapi.co/api/films/3/",
//   ],
//   "species": [
//     "https://swapi.co/api/species/1/"
//   ],
//   "vehicles": [
//     "https://swapi.co/api/vehicles/14/",
//     "https://swapi.co/api/vehicles/30/"
//   ],
//   "starships": [
//     "https://swapi.co/api/starships/12/",
//     "https://swapi.co/api/starships/22/"
//   ],
//   "created": "2014-12-09T13:50:51.644000Z",
//   "edited": "2014-12-20T21:17:56.891000Z",
//   "url": "https://swapi.co/api/people/1/"
// },

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`) 
      .then((results) => {
        console.log("starwars character api object", results)
      })

      .catch((error) => {
        console.log("The Api is currently down", error)
      }); 
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
