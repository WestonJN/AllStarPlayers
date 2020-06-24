import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import PlayerCard from './PlayerCard';
import fetch from "node-fetch";

export default function App() {
  const [players, setPlayers] = React.useState([])
  
  useEffect(() =>{
    async function fetchPlayers(){
      setPlayers(
       await fetch("https://data.nba.net/prod/v1/allstar/2016/AS_roster.json")
        .then((res) => res.json())
        .then((res => res.sportsContent.roster[0].players[1610616833]))
        .catch((err) => console.log(err, "fetch warning"))
      );
    }
    fetchPlayers();
  }
  ,[]);

  return (
    <div className="App">
      <h3>ALL STAR PLAYERS</h3>
  
      <Grid
      container
      spacing={10}
      style={{padding: '24px'}}
      >
        {players.map( (players) => (
        <Grid 
        key={players.id}
        item
        xs={12} sm={6} md={4} lg={4} xl={3}
        >    
        <PlayerCard
          key={players.id}
          firstName={players.firstName}
          lastName={players.lastName}
          team={players.teamName}
          position={players.positionFull}
         />
        </Grid>
        ))}
      </Grid>
    </div>
  );
};

