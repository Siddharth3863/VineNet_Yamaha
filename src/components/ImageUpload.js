import React, { useState } from 'react';
import './styles.css';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await fetch('http://localhost:5000/process-image', {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Failed to process image');
        }
        // const data = await response.json();
        // // Redirect to the ImageView page passing the image URL as a parameter
        // console.log('Received URL:', data.imageUrl);
        window.location.href = `/display`;
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., display error message to user)
    } finally {
        setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              {isProcessing ? (
                <div className="text-center">
                  <p>Please wait while we process your image...</p>
                  {/* You can add a loading spinner or animation here */}
                </div>
              ) : (
                <>
                  <h5 className="card-title">Upload Image</h5>
                  <input type="file" className="form-control mb-3" accept="image/*" onChange={handleFileChange} />
                  <button onClick={handleSubmit} className="btn btn-primary">Process Image</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
