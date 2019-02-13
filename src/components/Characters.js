import { inject, observer } from "mobx-react";
import React from "react";

import Character from "./Character";

const Buttons = ({ addCharacter, deleteAllCharacters }) => (
  <div className="field is-grouped">
    <div className="control">
      <button
        className="button is-primary has-icon-left"
        onClick={addCharacter}
      >
        <span className="icon">
          <i className="fas fa-plus" />
        </span>
        <span>New</span>
      </button>
    </div>
    <div className="control">
      <button
        className="button is-danger is-outlined"
        onClick={deleteAllCharacters}
      >
        <span className="icon">
          <i className="fas fa-times" />
        </span>
        <span>Delete All</span>
      </button>
    </div>
  </div>
);

const Characters = inject(stores => {
  const {
    characterStore: {
      addCharacter,
      characters,
      deleteAllCharacters,
      deleteCharacter,
      updateCharacter
    }
  } = stores;

  return {
    addCharacter,
    characters,
    deleteAllCharacters,
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
        <Buttons
          addCharacter={props.addCharacter}
          deleteAllCharacters={props.deleteAllCharacters}
        />
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
