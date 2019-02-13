import React from "react";

const BASIC_MOVES = [
  {
    content: (
      <>
        <p>
          When you <strong>attack an enemy in melee</strong>, roll +STR.
        </p>
        <p>
          On a 10+, you deal your damage to the enemy and avoid their attack. At
          your option, you may choose to do +1d6 damage but expose yourself to
          the enemy's attack.
        </p>
        <p>
          ON a 7-9, you deal your damage to the enemy and the enemy makes an
          attack against you.
        </p>
      </>
    ),
    name: "Hack & Slash"
  }
];

export default BASIC_MOVES;
