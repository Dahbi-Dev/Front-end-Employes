import React, { useState } from "react";
import NavBar from "./NavBar";

function Q1({}) {
  const [materiel, setMateriel] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      {
        materiel,
        marque,
        date,
        category,
      },
    ]);

    // setShowData((isOpen) => !isOpen);
  };
  return (
    <div>
      <NavBar />
      <div style={{ border: "1px black solid", margin: "50px" }}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "grid", margin: "20px", gap: "10px" }}
        >
          <h1>Gestion Materiel</h1>

          <label>Code Materiel:</label>
          <input
            type="text"
            onChange={(e) => setMateriel(e.target.value)}
            required
          />

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
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label>Categorie:</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="submit"
            value="Confirmer"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
            }}
          />
        </form>

        <div style={{ margin: "20px", gap: "10px" }}>
          <h2>Recapitulatif des informations:</h2>

          {data.map((item) => (
            <ul>
              <li>Materiel : {item.materiel}</li>
              <li>Marque : {item.marque}</li>
              <li>Date debut utilisation : {item.date}</li>
              <li>Categorie: {item.category}</li>{" "}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Q1;
