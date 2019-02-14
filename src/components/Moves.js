import React, { useState } from 'react';

import MOVES from '../constants/moves';

const Card = ({ content, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="column is-one-quarter">
      <div className="card">
        <header className="card-header">
          <h1 className="card-header-title">{name}</h1>
          <div className="card-header-icon" onClick={() => setOpen(!open)}>
            <span class="icon">
              <i aria-hidden="true" class="fas fa-angle-down" />
            </span>
          </div>
        </header>
        {open && (
          <section className="card-content">
            <div className="content">{content}</div>
          </section>
        )}
      </div>
    </div>
  );
};

const Moves = () => (
  <section className="section">
    <div className="level box">
      <h1 className="title" style={{ marginBottom: 0 }}>
        Moves
      </h1>
    </div>

    <div className="columns is-multiline is-centered is-mobile">
      {MOVES.map(move => (
        <Card {...move} />
      ))}
    </div>
  </section>
);

export default Moves;
