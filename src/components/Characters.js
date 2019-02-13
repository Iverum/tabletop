import { inject, observer } from 'mobx-react';
import React from 'react';

import Character from './Character';

const Characters = inject(stores => {
  const {
    characterStore: {
      addCharacter,
      characters,
      deleteCharacter,
      updateCharacter
    }
  } = stores;

  return {
    addCharacter,
    characters,
    deleteCharacter,
    updateCharacter
  };
})(
  observer(props => (
    <section className="section">
      <div className="level box">
        <h1 className="title" style={{ marginBottom: 0 }}>
          Characters
        </h1>
        <button
          className="button is-primary has-icon-left"
          onClick={props.addCharacter}
        >
          <span className="icon">
            <i className="fas fa-plus" />
          </span>
          <span>New</span>
        </button>
      </div>
      {props.characters.map((character, index) => (
        <Character
          {...character}
          delete={() => props.deleteCharacter(index)}
          key={index}
          update={(property, newValue) =>
            props.updateCharacter(index, property, newValue)
          }
        />
      ))}
    </section>
  ))
);

export default Characters;
