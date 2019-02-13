import { Provider } from "mobx-react";
import React from "react";

import Characters from "./components/Characters";
import CharacterStore from "./stores/CharacterStore";

const stores = {
  characterStore: new CharacterStore()
};

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <>
          <nav
            aria-label="main navigation"
            className="navbar is-fixed-top"
            role="navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <span className="icon">
                  <i className="fas fa-dice-d20" />
                </span>
                <span>Tabletop</span>
              </a>
            </div>
            <div className="navbar-menu">
              <a class="navbar-item is-active">Characters</a>
              <a class="navbar-item">Moves</a>
            </div>
          </nav>
          <Characters />
        </>
      </Provider>
    );
  }
}

export default App;
