import React from "react";

import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import { BASIC_MOVES, SPECIAL_MOVES } from "../constants/moves";

const Card = ({ content, name }) => (
  <section style={{ padding: "1rem", minWidth: "33%", maxWidth: "33%" }}>
    <div
      className="card"
      style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
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

const Moves = props => {
  const {
    match: {
      params: { moveSet }
    }
  } = props;

  let moves = [];
  switch (moveSet) {
    case "special": {
      moves = SPECIAL_MOVES;
      break;
    }

    case "basic":
    default:
      moves = BASIC_MOVES;
      break;
  }

  return (
    <section className="section">
      <Header title="Moves">
        <LinkButton
          isActive={!moveSet || moveSet === "basic"}
          label="Basic"
          to="/moves/basic"
        />
        <LinkButton
          isActive={moveSet === "special"}
          label="Special"
          to="/moves/special"
        />
      </Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          flexWrap: "wrap"
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
