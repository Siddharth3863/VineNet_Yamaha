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
    <div class="container card-body">
      <input type="file" class=".btn" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit} class=".btn">Process Image</button>
    </div>
  );
};

export default ImageUpload;
