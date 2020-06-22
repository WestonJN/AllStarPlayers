import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() =>{
    async function fecthData(){
      setPlayers(
        fetch('http://data.nba.net/prod/v1/allstar/{year}/AS_roster.json')
        .then(res => res.json())
        .then(res => console.log(res))
      )
    }
    fecthData();
  }
  ,[])

  return (
    <div className="App">
      <h3>ALL STAR PLAYERS</h3>
       
    </div>
  );
}

export default App;
