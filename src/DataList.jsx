import React from "react";

function DataList(data, loading) {
  if (loading) {
    return <p>Učitavanje...</p>;
  }

  return (
    <div>
      <h2>Rezultati pretrage</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.avatar_url}
            {item.location}
            {item.bio}
            console.log(item)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
