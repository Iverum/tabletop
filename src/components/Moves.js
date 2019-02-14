import React from 'react';

import MOVES from '../constants/moves';

const Card = ({ content, name }) => (
  <section style={{ padding: '1rem', minWidth: '33%', maxWidth: '33%' }}>
    <div
      className="card"
      style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}
    >
      <header className="card-header">
        <h1 className="card-header-title">{name}</h1>
      </header>
      <section className="card-content">
        <div className="content">{content}</div>
      </section>
    </div>
  </section>
);

const Moves = () => (
  <section className="section">
    <div className="level box">
      <h1 className="title" style={{ marginBottom: 0 }}>
        Moves
      </h1>
    </div>

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap'
      }}
    >
      {MOVES.map(move => (
        <Card {...move} />
      ))}
    </div>
  </section>
);

export default Moves;
