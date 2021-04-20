import React from 'react';

const Gif = (props) => {
  const { id, select } = props;

  const handleClick = () => {
    select(id);
  };

  const source = `https://media0.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={source} className="gif" alt="a gif" onClick={handleClick} />
  );
};

export default Gif;
