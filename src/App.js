import React from 'react';

import Character from './components/Character';

class App extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="level container">
          <h1 className="title">Characters</h1>
          <button className="button" onClick={() => console.log('TODO')}>
            New
          </button>
        </div>
        <Character />
      </section>
    );
  }
}

export default App;
