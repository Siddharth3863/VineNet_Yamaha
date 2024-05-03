
# VineNet: Grasp of the Grape

Through VineNet, we aim to not only enhance the accuracy of grape bunch segmentation but also pave the way for real-time applications that empower vineyard managers to make informed decisions swiftly.


## Objective

- Semantic segmentation of grape bunches in high-resolution images
- Minimizing inference time for real-time applications
- Development of a User friendly webpage 

## Challenges 
- The Dataset consists of high resolution images of vineyards with respective masked images of grape bunches. It is tough for semantic segment the green grapes from the leaves.
- Minimizing inference time for real-time applications while maintaining the accuracy
- A light weight model

## Aproach Overview
- Since the provided dataset is of total 719 images, there is a need of data augumention to maintain robustness of model in real life scenario
- For real time segmentation, the model must have an inference time of < 33 ms so that it can process 30 fps videos without lag and hence we have chosen **UNet** architecture for its low inference time and high accuracy in image segmentation problems.

## UNet architechture 
It consists of a **contracting path**(left side) and an **expansive path** (right side). The contracting path follows the typical architecture of a convolutional network. 

Contracting path- It consists of the repeated application of two 3x3 convolutions (padded convolutions), each followed by a rectified linear unit (ReLU) and a 2x2 max pooling operation with stride 2 for downsampling. At each downsampling step we double the number of feature channels.

Expansive path-  Every step in the expansive path consists of an upsampling of the feature map followed by a **2x2 convolution (“up-convolution”)** that halves the number of feature channels, a concatenation with the correspondingly cropped feature map from the contracting path, and **two 3x3 convolutions**, each followed by a **ReLU**. 

At the **final layer a 1x1 convolution** is used to map each 64- component feature vector to the desired number of classes. In total the network has 24 convolutional layers

## Training Process
- We augmented the data (zoomed it, horizontal flip)
- We consider rotating it but got the poor results
- Ran the model for 20 epochs
- We were not having gpu for training the model so we tried to run it on cpu, henceforth we tuned a few of the hyperparameters

## Implementation
- We made a simple React-based website which runs with flask server. The web runs locally for now and the process to run the web is given below.
- First, we have to run our flask server. For this we go into the directory named 'backend' which should be in our root directory. In this directory we run the server by running the code
        **python server.py**
- Next we have to run the website. For this we open another terminal in the root directory and simply run the command **npm start**. This should redirect us to the website on your Browser.
- Next we go to the upload tab in the site and select the image we want to upload. The output is generated and you are redirected to another page to view the output.
- To run the model on pretrained weights please download them from the link given below and save it in the folder backend.
- [Link to Pretrained Model Weights](https://drive.google.com/file/d/1H3tZ0DBRPXLkAjwn7SC1Og059ktZI1Lv/view?usp=drive_link)
- Save the model weights as 'unet_membrane.hdf5' in the backend directory.


## Documentation
Here is the link to our 
[presentation](https://docs.google.com/presentation/d/1U5wWiaXayFolVmbfYkEm3NH2oh0PpScSTNGvM54Qu9g/edit?pli=1#slide=id.g2d09e708e59_0_182)


## Authors

- [Abhijith Raju Nair](https://github.com/DarthBob112112)
- [Eshaan Dhamija](https://github.com/eshaandhamija28)
- [Ishan Sinha](https://github.com/photondestroyer)
- [Sarthak Prajapati](https://github.com/07Sarthak)
- [Siddharth Shainesh](https://github.com/Siddharthmainahihu)

