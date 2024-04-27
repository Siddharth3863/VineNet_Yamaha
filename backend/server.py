# server.py
from flask import Flask, request, send_file
from PIL import Image
import io

app = Flask(__name__)

@app.route('/process_image', methods=['POST'])
def process_image():
    # Get the uploaded image file from the request
    file = request.files['image']

    # Read the image file and process it
    image_bytes = file.read()
    image = Image.open(io.BytesIO(image_bytes))

    # Example image processing (you can replace this with your own processing logic)
    processed_image = image.rotate(90).convert('RGB')

    # Save the processed image to a BytesIO object
    output_buffer = io.BytesIO()
    processed_image.save(output_buffer, format='JPEG')
    output_buffer.seek(0)

    # Return the processed image as a response
    return send_file(output_buffer, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True)
