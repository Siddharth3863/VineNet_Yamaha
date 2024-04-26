import React from 'react';

const ImageView = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Processed Image" />
    </div>
  );
};

export default ImageView;
