import './App.css';
import Auth from './Auth'
import Shop from './Shop'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const select=useSelector((state)=>state)
  const dispatch=useDispatch();
  
  return (
    <div className="App">
    {select.loggedin===false?<Auth/>:<Shop/>}
    </div>
  );
}

export default App;
