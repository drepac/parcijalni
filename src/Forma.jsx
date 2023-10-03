import React from "react";

function Forma({ query, onQueryChange }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <form onClick={handleSubmit}>
        <label>GitHub username:</label>
        <input
          type="text"
          placeholder="e.g.facebook"
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
          }}
        />
        <button type="submit">G.O.</button>
      </form>
    </div>
  );
}

export default Forma;
