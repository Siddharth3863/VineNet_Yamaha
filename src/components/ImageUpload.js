import React, { useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('http://localhost:5000/process-image', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      // Redirect to the ImageView page passing the image URL as a parameter
      window.location.href = `/image-view?imageUrl=${data.imageUrl}`;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">Upload Image</h5>
              <input type="file" className="form-control mb-3" accept="image/*" onChange={handleFileChange} />
              <button onClick={handleSubmit} className="btn btn-primary">Process Image</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
