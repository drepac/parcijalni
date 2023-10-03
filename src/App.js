import "./App.css";
import Forma from "./Forma";
import DataList from "./DataList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${query}`
        );
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Greška pri dohvaćanju podataka:", error);
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <Forma query={query} onQueryChange={setQuery} />
      <DataList data={data} loading={loading} />
    </div>
  );
}

export default App;
