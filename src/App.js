import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    async function fetchData(){
      setUsers(
    await  fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log(err, "fetch warning"))
      )
    }
    fetchData();
  }
  ,[])

  return (
    <div className="App">
      <h3>ALL STAR USERS</h3>
      <Grid
      conatiner
      spacing={10}
      style={{padding: '24px'}}
      >
       {users.map(user => user.first_name)}
      </Grid>
    </div>
  );
}

export default App;
