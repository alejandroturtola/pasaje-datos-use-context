//import logo from './logo.svg';
import './App.css';
//import Form from './Form/Form';
import { useState, createContext } from 'react';
import Result from './Result/Result'

export const datoContext = createContext()

function App() {

const [dato, setDato] = useState("")
const [datoPasar, setDatoPasar] = useState("")  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(dato)
    setDatoPasar(dato)
    setDato("")
  }  


  return (
    <datoContext.Provider value={datoPasar}>
      <div className="App">
        <form >
              <input 
                  type="text" 
                  value={dato}
                  onChange={(e)=>setDato(e.target.value)}
              />
              <button type='submit' onClick={(e)=>handleSubmit(e)}>Pasar dato</button>
          </form>
          <Result />     
      </div>
    </datoContext.Provider>
  );
}

export default App;
