import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
   async function fetchData (){

    try{
      const response = await axios.get("https://back-end-employes.onrender.com/employes")
      setData(response.data)
    }catch(error){
      console.log("Error fetching Data:",error);
    }
    }
    fetchData()
   
  },[])

  return (
    <div className="App">
      
      



      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Q1  />} />
        <Route path="/q2" element={<Q2  data={data} />}/>
        <Route path="/q3" element={<Q3  data={data} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
