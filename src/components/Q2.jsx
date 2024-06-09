import React, { useState } from "react";
import NavBar from "./NavBar";

function Q2({ data }) {
  return (
    <div>
      <NavBar />

      <div
        className="Table"
        style={{ border: "black 1px solid", margin: "20px" }}
      >
        <h2>Liste des Employes</h2>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>nom</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                prenom
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                posts
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                departments
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} style={{ border: "1px solid #ddd" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.nomEmp}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.prenomEmp}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.poste}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.departement.nomDep}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Q2;
