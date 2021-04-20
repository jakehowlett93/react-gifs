import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  const { gifs, select } = props;

  const renderList = gifs.map((gif) => {
    return <Gif id={gif.id} key={gif.id} select={select} />;
  });

  return (
    <div className="gif-list">
      {renderList}
    </div>
  );
};

export default GifList;
