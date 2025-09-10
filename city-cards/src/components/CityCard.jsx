import React from "react";

const CityCard = ({ city }) => {
  if (!city) return <p style={{ textAlign: "center" }}>Выберите город</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>{city.name}</h2>
      <img
        src={city.imageUrl}
        alt={city.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "10px" }}>{city.description}</p>
      <ul style={{ textAlign: "left", marginTop: "10px" }}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
