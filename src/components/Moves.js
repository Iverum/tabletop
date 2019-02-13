import React from "react";

import MOVES from "../constants/moves";

function mapMovesToColumns() {
  const rows = [];
  let row = [];

  MOVES.forEach((move, index) => {
    row.push(
      <div className={`column is-3`}>
        <div className="card">
          <div className="card-header">
            <h1 className="card-header-title">{move.name}</h1>
          </div>
          <div className="card-content">
            <div className="content">{move.content}</div>
          </div>
        </div>
      </div>
    );

    if ((index + 1) % 4 === 0) {
      rows.push(row);
      row = [];
    }
  });

  if (row.length > 0) {
    rows.push(row);
  }

  return rows;
}

const Moves = () => (
  <section className="section">
    <div className="level box">
      <h1 className="title" style={{ marginBottom: 0 }}>
        Moves
      </h1>
    </div>
    {mapMovesToColumns().map(row => (
      <div className="columns">{row}</div>
    ))}
  </section>
);

export default Moves;
