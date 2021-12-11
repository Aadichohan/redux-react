// import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import './App.css';
import {BUY_SOAP, SELL_SOAP, BUY_SURF, SELL_SURF} from './actions'
function App() {
  const inputRef = useRef();
  const selectRef = useRef();
  const soap = useSelector(state => state.soap);
  const surf = useSelector(state => state.surf);
  const dispatch = useDispatch();
  const sellHandler = () => {
   const action =  selectRef.current.value;
     const type = ( action == 'SOAP') ? SELL_SOAP : SELL_SURF
     const obj = ( action == 'SOAP') ? 'soap' : 'surf' ;
       let val = inputRef.current.value;
     dispatch({type: type, payload : {[obj] : val}})
  }  
  
  const buyHandler = () => {
    const action =  selectRef.current.value;
    const type = ( action == 'SOAP') ? BUY_SOAP : BUY_SURF
    const obj = ( action == 'SOAP') ? 'soap' : 'surf' ;
       let val = inputRef.current.value;
     dispatch({type: type, payload : {[obj] : val}})
  }
  return (
    <div className="App">
           {` value of Soap = ${soap}`}
           <br/>
           {` value of Surf = ${surf}`}
      <div>
      <select ref={selectRef}>
        <option></option>
        <option value="SOAP">SOAP</option>
        <option value="SURF">SURF</option>
      </select>
      <input type="text" ref={inputRef}/>
       <button onClick={sellHandler}>Sell</button>
       <button onClick={buyHandler}>Buy</button>
      </div>
    </div>
  );
}

export default App;
