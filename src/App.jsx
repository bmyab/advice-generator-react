import { useState , useEffect} from "react";
import pattern from "./assets/images/pattern-divider-mobile.svg";
import icon from "./assets/images/icon-dice.svg";

function App() {

  const [datos, setDatos] = useState([]);

  
  const consumirApi = async ()=>{
    const url = 'https://api.adviceslip.com/advice';
    
    const res = await fetch(url);
    const datos = await res.json();
    
    setDatos(datos.slip);
  }
  
  useEffect(() => {
    consumirApi();
  }, []);
  
  // console.log(datos)
  const {id,advice} = datos;
  return (
    <div className="card">
      <p className="title">advice # {id}</p>
      <h1 className="parrafo">
        "{advice}"
      </h1>
      <div className="pattern">
        <img src={pattern} alt="pattern image" />
      </div>
      <div
        onClick={ consumirApi } 
        className="btn">
        <img className="icon" src={icon} alt="image icon" />
      </div>
    </div>
  );
}

export default App;
