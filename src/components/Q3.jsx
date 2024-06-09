import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Q3({ data }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (input.trim() !== "") {
      // Filter suggestions based on input
      const filteredSuggestions = data.filter((item) =>
        item.departement.nomDep.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input, data]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInput(suggestion.departement.nomDep);
    setSuggestions([]); // Clear suggestions
    handleSearch(suggestion.departement.nomDep);
  };

  const handleSearch = (query) => {
    const found = data.filter(
      (item) => item.departement.nomDep.toLowerCase() === query.toLowerCase()
    );

    if (found.length > 0) {
      const names = found.map((item) => `${item.nomEmp} ${item.prenomEmp}`);
      setResult(names.join(", "));
    } else {
      setResult("Departement Not Found");
    }
  };

  return (
    <div>
      <NavBar />

      <div>
        <h1>Recherche par Departement</h1>
        <div style={{ display: "grid", margin: "50px", gap: "9px" }}>
          <label>Entrer le nom du departement : </label>
          <input
            value={input}
            type="text"
            onChange={handleChange}
            required
          />
         
            {suggestions.map((suggestion) => (
              <p style={{textDecoration:'underline', cursor:'pointer', color:'blue'}}
                              key={suggestion.id}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.departement.nomDep}
              </p>
            ))}
        
        </div>
      </div>
      <div>
        <h1>Result</h1>
        <ul>
          {result.split(", ").map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Q3;
