import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Character, {CharacterInfo} from "./components/Character"


const App = () => {
  const [info, setInfo] = useState([])
  const [sharedInfo, setSharedInfo] = useState(true)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
      axios
      .get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res.data)
        setInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // function showSharedInfo(){
  //   setSharedInfo()
  // }
    

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={info} key />
    </div>
  );
}

export default App;
