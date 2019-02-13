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
  },
  {
    content: (
      <>
        <p>
          When you <strong>take aim and shoot at an enemy at range</strong>,
          roll +DEX.
        </p>
        <p>On a 10+, you have a clear shot – deal your damage.</p>
        <p>On a 7-9, choose one (you deal your damage regardless):</p>
        <ul>
          <li>you have to move to get the shot placing you in danger</li>
          <li>you have to take what you can get (-1d6 damage)</li>
          <li>you have to take several shots, reducing your ammo by one</li>
        </ul>
      </>
    ),
    name: "Volley"
  },
  {
    content: (
      <>
        <p>
          When you <strong>act despite an imminent threat</strong> or{" "}
          <strong>suffer a calamity</strong>, say how you deal with it and roll.
          If you do it:
        </p>
        <ul>
          <li>by powering through, +STR</li>
          <li>by getting out of the way or acting fast, +DEX</li>
          <li>by enduring, +CON</li>
          <li>with quick thinking, +INT</li>
          <li>through mental fortitude, +WIS</li>
          <li>using charm or social grace, +CHA</li>
        </ul>
        <p>
          On a 10+, you do what you set out to, the threat does not come to
          bear.
        </p>
        <p>
          On a 7-9, you stumble, hesitate, or flinch: the GM will offer you a
          worse outcome, hard bargin, or ugly choice.
        </p>
      </>
    ),
    name: "Defy Danger"
  }
];

export default BASIC_MOVES;
