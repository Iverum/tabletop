import { inject, observer } from "mobx-react";
import React from "react";

import Header from "../components/Header";

const Character = inject((stores, ownProps) => {
  const {
    characterStore: { characters }
  } = stores;

  return {
    character: characters.find(c => c.uuid === ownProps.match.params.uuid)
  };
})(
  observer(props => (
    <section className="section">
      <Header title={props.character.name} />
    </section>
  ))
);

export default Character;
