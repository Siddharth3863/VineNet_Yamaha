import React from 'react';
import Image from '../0_predict.png';

const ImageView = ({ imageUrl }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Processed Image</h5>
              <img src={Image} className="img-fluid" alt="Processed Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
