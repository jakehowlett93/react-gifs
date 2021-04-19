import React, { Component } from 'react';

import Search from './search';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedGif: "3LdNdcLDaPL8bK0ObS",
      gifs: [ { id: "3LdNdcLDaPL8bK0ObS" } ]
    }
  }

  render() {
    const { selectedGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <div>
            <Search />
          </div>
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
