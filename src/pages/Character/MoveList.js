import { observer } from "mobx-react";
import React from "react";

import Card from "../../components/Card";
import MOVES from "../../constants/moves";

const MoveList = observer(() => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexGrow: 1,
      flexWrap: "wrap"
    }}
  >
    {MOVES.map(move => (
      <Card key={move.name} {...move} />
    ))}
  </div>
));

export default MoveList;
