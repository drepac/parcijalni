import { useState } from "react";
import "./App.css";
import Forma from "./Forma";
import DataList from "./DataList";
//import { useState, useEffect } from "react";

function App({ onSearch }) {
  const [userData, setUserData] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) =>
        console.error("Greška prilikom dohvaćanja podataka:", error)
      );
  };

  return (
    <div>
      <Forma onSearch={handleSearch} />
      <DataList userData={userData} />
    </div>
  );
}

export default App;
