import React from 'react';

const Gif = (props) => {
  const { id } = props;
  const source = `https://media0.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={source} className="gif" alt="a gif" />
  );
};

export default Gif;
