from model import *
from data import *
import time
data_gen_args=dict()
model=unet()
model_weight_link="unet_membrane.hdf5"
model.load_weights(model_weight_link)

test_path="path to the test data folder"
files=os.listdir(test_path+'/images')
files.sort()
images_no=len(files)
testGene = testGenerator(test_path+'/images',as_gray=False)
begin=time.time()
results = model.predict_generator(testGene,images_no,verbose=1)
end=time.time()
print((end-begin)/images_no,"s for 1 imgs")
saveResult("results/pred",results)
