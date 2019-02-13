import React from "react";

const BASIC_MOVES = [
  {
    content: (
      <>
        <p>
          When you <strong>attack an enemy in melee</strong>, roll +STR.
        </p>
        <p>
          On a 10+, you deal your damage to the enemy and avoid their attack. At
          your option, you may choose to do +1d6 damage but expose yourself to
          the enemy's attack.
        </p>
        <p>
          ON a 7-9, you deal your damage to the enemy and the enemy makes an
          attack against you.
        </p>
      </>
    ),
    name: "Hack & Slash"
  }
];

function mapMovesToColumns() {
  const rows = [];
  let row = [];

  BASIC_MOVES.forEach((move, index) => {
    row.push(
      <div className={`column is-4`}>
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

    if (index % 4 === 0) {
      rows.push(row);
      row = [];
    }
  });

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
