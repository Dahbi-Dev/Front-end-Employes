import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Q1({}) {
  const [materiel, setMateriel] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData((isOpen) => !isOpen);
    
  };
        return (
          <div>
             <NavBar />
                <div style={{ border: "1px black solid", margin: "50px" }}>
                    <div style={{ display: "grid", margin: "20px", gap: "10px" }}>
                      <h1>Gestion Materiel</h1>
              
                      <label>Code Materiel:</label>
                      <input type="text" onChange={(e) => setMateriel(e.target.value)} />
              
                      <label>Marque:</label>
                      <select onChange={(e) => setMarque(e.target.value)}>
              <option selected hidden disabled>
                Selectioner la marque :
              </option>
              <option value="HP">HP</option>
              <option value="DELL">DELL</option>
              <option value="LENOVO">LENOVO</option>
                      </select>
              
                      <label>Date debut utilisation:</label>
                      <input type="date" onChange={(e) => setDate(e.target.value)} />
              
                      <label>Categorie:</label>
                      <input type="text" onChange={(e) => setCategory(e.target.value)} />
              
                      <button
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "8px",
              }}
              onClick={handleClick}
                      >
              Confirmer
                      </button>
                    </div>
                    {showData && (
                      <div style={{  margin: "20px", gap: "10px" }}>
              <h2>Recapitulatif des informations:</h2>
              <ul>
                <li>Materiel : {materiel}</li>
                <li>Marque : {marque}</li>
                <li>Date debut utilisation : {date}</li>
                <li>Categorie: {category}</li>
              </ul>
                      </div>
                    )}
                  </div>
          </div>
  );
}

export default Q1;
