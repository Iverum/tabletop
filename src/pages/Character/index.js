import { inject, observer } from "mobx-react";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import MoveList from "./MoveList";
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
  observer(props => {
    const {
      match: {
        params: { section, uuid }
      }
    } = props;

    return (
      <section className="section">
        <Header title={props.character.name}>
          <LinkButton
            isActive={!section || section === "stats"}
            label="Info"
            to={`/characters/${uuid}/stats`}
          />
          <LinkButton
            isActive={section === "moves"}
            label="Moves"
            to={`/characters/${uuid}/moves`}
          />
          <LinkButton
            isActive={section === "gear"}
            label="Gear"
            to={`/characters/${uuid}/gear`}
          />
        </Header>
        <Switch>
          <Route
            path={`/characters/${uuid}/moves`}
            render={() => <MoveList playbook={props.character.playbook} />}
          />
          <Route
            path={[`/characters/${uuid}`, `/characters/${uuid}/stats`]}
            render={() => <StatBlock {...props} />}
          />
        </Switch>
      </section>
    );
  })
);

export default Character;
