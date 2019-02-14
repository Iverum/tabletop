import React from 'react';

export const BASIC_MOVES = [
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
    name: 'Hack & Slash'
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
    name: 'Volley'
  },
  {
    content: (
      <>
        <p>
          When you <strong>act despite an imminent threat</strong> or&nbsp;
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
    name: 'Defy Danger'
  },
  {
    content: (
      <>
        <p>
          When you&nbsp;
          <strong>
            stand in defense of a person, item, or location under attack
          </strong>
          , roll +CON.
        </p>
        <p>On a 10+, hold 3</p>
        <p>On a 7-9, hold 1.</p>
        <p>
          As long as you stand in defense, when you or the thing you defend is
          attacked you may spend hold, 1 for 1, to choose an option:
        </p>
        <ul>
          <li>redirect an attack from the thing you defend to yourself</li>
          <li>halve the attack’s effect or damage</li>
          <li>
            open up the attacker to an ally giving that ally +1 forward against
            the attacker
          </li>
          <li>deal damage to the attacker equal to your level</li>
        </ul>
      </>
    ),
    name: 'Defend'
  },
  {
    content: (
      <>
        <p>
          When you&nbsp;
          <strong>consult your accumulated knowledge about something</strong>,
          roll+INT.
        </p>
        <p>
          On a 10+, the GM will tell you something interesting and useful about
          the subject relevant to your situation.
        </p>
        <p>
          On a 7–9, the GM will only tell you something interesting—it’s on you
          to make it useful. The GM might ask you "How do you know this?" Tell
          them the truth, now.
        </p>
      </>
    ),
    name: 'Spout Lore'
  },
  {
    content: (
      <>
        <p>
          When you <strong>closely study a person or situation</strong>, roll
          +WIS.
        </p>
        <p>On a 10+, ask the GM 3 questions from the list below.</p>
        <p>On a 7-9, ask the GM 1 question.</p>
        <p>Either way, take +1 forward acting on the answers.</p>
        <ul>
          <li>What here is useful or valuable to me?</li>
          <li>What happened here recently?</li>
          <li>Who here is really in control?</li>
          <li>What here is not what it appears to be?</li>
          <li>What is about to happen?</li>
          <li>What should I be on the lookout for?</li>
        </ul>
      </>
    ),
    name: 'Discern Realities'
  },
  {
    content: (
      <>
        <p>
          When you&nbsp;
          <strong>have leverage on a GM character and manipulate them</strong>,
          roll +CHA.
        </p>
        <p>Leverage is something they need or want.</p>
        <p>
          On a 10+, they do what you ask if you first promise what they ask of
          you.
        </p>
        <p>
          On a 7–9, they will do what you ask, but need some concrete assurance
          of your promise, right now.
        </p>
      </>
    ),
    name: 'Parley'
  },
  {
    content: (
      <>
        <p>
          When you <strong>help or hinder someone you have a bond with</strong>,
          roll +Bond with them.
        </p>
        <p>On a 10+ they take +1 or -2, your choice.</p>
        <p>
          On a 7–9 you also expose yourself to danger, retribution, or cost.
        </p>
      </>
    ),
    name: 'Aid or Interfere'
  }
];

export const SPECIAL_MOVES = [
  {
    content: (
      <>
        <p>
          When{' '}
          <strong>
            you’re dying you catch a glimpse of what lies beyond the Black Gates
            of Death’s Kingdom
          </strong>
          , roll +nothing
        </p>
        <p>
          On a 10+, you’ve cheated Death—you’re in a bad spot but you’re still
          alive.
        </p>
        <p>
          On a 7–9, Death himself will offer you a bargain. Take it and
          stabilize or refuse and pass beyond the Black Gates into whatever fate
          awaits you.
        </p>
        <p>
          On 6-, your fate is sealed. You’re marked as Death’s own and you’ll
          cross the threshold soon. The GM will tell you when.
        </p>
      </>
    ),
    name: 'Last Breath'
  }
];

export default [...BASIC_MOVES, ...SPECIAL_MOVES];
