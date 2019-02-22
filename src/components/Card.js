import React from 'react';

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

export default Card;
