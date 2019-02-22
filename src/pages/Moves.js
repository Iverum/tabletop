import React from 'react';

import Card from '../components/Card';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import { BASIC_MOVES, SPECIAL_MOVES } from '../constants/moves';

const Moves = props => {
  const {
    match: {
      params: { moveSet }
    }
  } = props;

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
      <Header title="Moves">
        <LinkButton
          isActive={!moveSet || moveSet === 'basic'}
          label="Basic"
          to="/moves/basic"
        />
        <LinkButton
          isActive={moveSet === 'special'}
          label="Special"
          to="/moves/special"
        />
      </Header>
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
