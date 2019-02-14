import cn from 'classnames';
import capitalize from 'lodash/capitalize';
import React, { useState } from 'react';

import { BASIC_MOVES, SPECIAL_MOVES } from '../constants/moves';

const Button = ({ moveSet, setMoves, type }) => (
  <div className="control">
    <button
      className={cn('button is-primary', {
        'is-outlined': moveSet !== type
      })}
      onClick={() => setMoves(type)}
    >
      {capitalize(type)}
    </button>
  </div>
);

const Header = ({ moveSet, setMoves }) => (
  <div className="level box">
    <div className="field is-grouped">
      <h1 className="title control" style={{ marginBottom: 0 }}>
        Moves
      </h1>
      <Button moveSet={moveSet} setMoves={setMoves} type="basic" />
      <Button moveSet={moveSet} setMoves={setMoves} type="special" />
    </div>
  </div>
);

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

const Moves = () => {
  const [moveSet, setMoves] = useState('basic');

  let moves = [];
  switch (moveSet) {
    case 'special': {
      moves = SPECIAL_MOVES;
      break;
    }

    case 'basic':
    default:
      moves = BASIC_MOVES;
      break;
  }

  return (
    <section className="section">
      <Header moveSet={moveSet} setMoves={setMoves} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          flexWrap: 'wrap'
        }}
      >
        {moves.map(move => (
          <Card key={move.name} {...move} />
        ))}
      </div>
    </section>
  );
};

export default Moves;
