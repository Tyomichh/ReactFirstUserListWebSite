import React from 'react';

const Image = (props) => {
  return (
      <img src={props.importedImg} alt={props.altParam}/>
  );
};

export default Image;