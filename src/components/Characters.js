import { inject, observer } from 'mobx-react';
import React from 'react';

import Character from './Character';

const Characters = inject(stores => {
  const {
    characterStore: { addCharacter, characters }
  } = stores;

  return {
    addCharacter,
    characters
  };
})(
  observer(props => (
    <section className="section">
      <div className="level container">
        <h1 className="title">Characters</h1>
        <button className="button" onClick={props.addCharacter}>
          New
        </button>
      </div>
      {props.characters.map((character, index) => (
        <Character key={index} {...character} />
      ))}
    </section>
  ))
);

export default Characters;
