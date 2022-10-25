import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [championTeam, setChampionTeam] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/characters?_sort=id&_order=desc&_limit=7")
        .then((res) => res.json())
        .then((championTeam) => {
            setChampionTeam(championTeam);
        })
    }, []);
    
    return(
        <section className="movie-box">
        <h3>The Champion Team:</h3>
        {championTeam.map((character) => (
          <img className="home-poster"
          src={character.image} 
          style={{ width: '12rem' }} 
          onClick={(e)=>e.target.value} />
        ))}
        <div style={{ margin: "1rem 0" }}>
          <Link className="button" to="/CharacterPage">
            Build Your Own Team
          </Link>
        </div>
      </section>
    );
}
export default Home;