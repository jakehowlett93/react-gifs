import React, { Component } from 'react';

import Search from './search';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <div>
            <Search />
          </div>
          <div className="selected-gif">
            <Gif id="3LdNdcLDaPL8bK0ObS" />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;