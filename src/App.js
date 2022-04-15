import './App.css';
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:"inc"});
  }
  const decrement=()=>{
    dispatch({type:"dec"})
  }
  const addBy=()=>{
    dispatch({type:"addval",payload:{
      val:10
    }})
  }
  return (
    <div className="App">
      <h1>I am counter!!</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}> dec</button>
      <button onClick={addBy}> add Value</button>
    </div>
  );
}

export default App;
