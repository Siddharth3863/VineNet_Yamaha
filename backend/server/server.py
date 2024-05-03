from flask import Flask, request, send_file
from model import unet
from data import testGenerator, saveResult
import os
import logging
from flask_cors import CORS

# Configure logging
logging.basicConfig(filename='app.log', level=logging.ERROR)

app = Flask(__name__)
CORS(app)

# Load the trained model
model = unet()
model.load_weights("./unet_membrane.hdf5")

# Define a function to set directory permissions
def set_directory_permissions(directory):
    try:
        os.makedirs(directory, exist_ok=True)
        os.chmod(directory, 0o777)  # Set full permissions (read, write, execute) for everyone
    except OSError as e:
        logging.error(f"Error setting permissions for directory {directory}: {e}")

@app.route('/process-image', methods=['POST'])
def process_image():
    try:
        # Get the uploaded image file from the request
        file = request.files['file']
        
        # Read the image file in binary mode
        image_bytes = file.read()
        
        # Save the uploaded image to a temporary location
        image_path = 'temp_image.png'
        with open(image_path, 'wb') as f:
            f.write(image_bytes)

        # Generate test data generator
        testGene = testGenerator(image_path, as_gray=False)

        # Predict segmentation mask
        results = model.predict(testGene, steps=1)

        # Save the segmentation mask results
        saveResult(results)

        result_path = os.getcwd()

        # Log some information for debugging
        app.logger.info(f"Image path: {result_path}")
        app.logger.info(f"Image size: {len(image_bytes)} bytes")

        # Return the segmented image as a response
        return send_file(result_path, mimetype='image/png')
    except Exception as e:
        # Log the exception
        logging.error(f"Error processing image: {e}")
        # Return an error response
        return 'An error occurred while processing the image.', 500

    

if __name__ == '__main__':
    app.run(debug=True, port=5000)
