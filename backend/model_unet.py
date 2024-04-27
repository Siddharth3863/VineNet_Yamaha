import cv2
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.layers import Input, Conv2D, MaxPooling2D, Dropout, UpSampling2D, concatenate
from tensorflow.keras.models import Model, load_model
from tensorflow.keras.optimizers import Adam

# he U-Net model

# Load the model
model = load_model("unet_rgb_256.hdf5")
# model.load_weights("unet_rgb_256.hdf5")

img_path=r'C:\Users\sarth\Desktop\ML\DL_Hackathon\Unet\Block_1C1_Row_1_Middle_723.png'
img=cv2.imread(img_path)
#img = np.transpose(img, (1, 0, 2))
print(img.shape)
img=tf.image.resize(img,(256,256))
img = np.expand_dims(img, axis=0)  # Add batch dimension
print(img.shape)
# Predict segmentation mask
segmented_image = model.predict(img)
cv2.imwrite('segmented_image.png', segmented_image)
