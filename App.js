
//import React, {useEffect, useState} from "react";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
//useSelector will extract from redux store

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const counter1 = useSelector(state => state.counter1);
  return (
    <div>
<h1>Counter:{counter}</h1>
<button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
<h1>Counter:{counter1}</h1>
<button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  );
}

export default App;