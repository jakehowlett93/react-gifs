import React, { Component } from 'react';
import giphy from 'giphy-api';

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

  searchGifs = (value) => {
    const ids = [];
    giphy("9LtO6Ka1X6PP9yhQhm45g8H9nBK6Hyyo").search(value).then((result) => {
      result.data.forEach((gif) => {
        ids.push({ id: gif.id });
      });
      console.log(ids);
      this.setState({ gifs: ids });
    });
  }

  render() {
    const { selectedGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <div>
            <Search searchGifs={this.searchGifs} />
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
