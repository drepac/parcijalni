import React from "react";

function DataList({ userData }) {
  return (
    <div>
      {
        <ul>
          {userData && (
            <div>
              <h2>Podaci o GitHub korisniku:</h2>
              <p>Ime: {userData.name}</p>
              <p>Avatar_url: {userData.avatar_url}</p>
              <p>Lokacija: {userData.location}</p>
              <p>Biografija: {userData.bio}</p>
            </div>
          )}
        </ul>
      }
    </div>
  );
}

export default DataList;
