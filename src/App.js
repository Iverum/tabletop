import { Provider } from 'mobx-react';
import React from 'react';

import Characters from './components/Characters';
import CharacterStore from './stores/CharacterStore';

const stores = {
  characterStore: new CharacterStore()
};

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Characters />
      </Provider>
    );
  }
}

export default App;
