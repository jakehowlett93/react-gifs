import React, { Component } from 'react';

import Search from './search.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <Search />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;