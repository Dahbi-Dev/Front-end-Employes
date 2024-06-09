import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
   async function fetchData (){
      const req = await axios.get("https://back-end-employes.onrender.com/employes")
      setData(req.data)
    }
    fetchData()
    console.log(data)
   
  },[])

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
