import { inject, observer } from "mobx-react";
import React from "react";

import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import StatBlock from "./StatBlock";

const Character = inject((stores, ownProps) => {
  const {
    characterStore: { characters, updateCharacter }
  } = stores;

  const characterIndex = characters.findIndex(
    c => c.uuid === ownProps.match.params.uuid
  );

  return {
    character: characters[characterIndex],
    update: (property, newValue) =>
      updateCharacter(characterIndex, property, newValue)
  };
})(
  observer(props => (
    <section className="section">
      <Header title={props.character.name}>
        <LinkButton label="Info" to={`/characters/${props.uuid}/stats`} />
        <LinkButton label="Moves" to={`/characters/${props.uuid}/moves`} />
        <LinkButton label="Gear" to={`/characters/${props.uuid}/gear`} />
      </Header>
      <StatBlock {...props} />
    </section>
  ))
);

export default Character;
