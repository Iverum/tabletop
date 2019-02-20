import { Provider } from "mobx-react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopNavigation from "./components/TopNavigation";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Moves from "./pages/Moves";
import CharacterStore from "./stores/CharacterStore";

const stores = {
  characterStore: new CharacterStore()
};

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <>
            <TopNavigation />
            <Route component={Character} path="/characters/:uuid" />
            <Route component={Characters} exact path={["/", "/characters"]} />
            <Route component={Moves} exact path={"/moves/:moveSet?"} />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
