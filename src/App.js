import React from "react"; 
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function App() {
  const [value, setValue] = useState('Введи что-нибудь')
  const [likes, setLikes] = useState(1)

  function increment(){
    setLikes(likes + 1)
  }

  function decrement(){
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <input 
        type = "text"
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <h1>{likes}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
}

export default App;
