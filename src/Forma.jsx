import React, { useState } from "react";

function Forma({ onSearch }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(name);
    setName("");
  }

  return (
    <div className="container">
      <form onClick={handleSubmit}>
        <label>GitHub username:</label>
        <input
          type="text"
          placeholder="e.g.facebook"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">G.O.</button>
      </form>
    </div>
  );
}

export default Forma;
