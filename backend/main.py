from model import *
from data import *

#os.environ["CUDA_VISIBLE_DEVICES"] = "0"

keras.clear_session()

data_gen_args=dict()
# data_gen_args = dict(rotation_range=0.2,
#                     width_shift_range=0.05,
#                     height_shift_range=0.05,
#                     shear_range=0.05,
#                     zoom_range=0.05,
#                     horizontal_flip=True,
#                     fill_mode='nearest')
myGene = trainGenerator(2,'/scratch/siddharths.scee.iitmandi/vinenet/VineNet/train','images','masks',data_gen_args,save_to_dir = None,image_color_mode='rgb')
validGene = validationGenerator(2,'/scratch/siddharths.scee.iitmandi/vinenet/VineNet/train','images','masks',data_gen_args,save_to_dir = None,image_color_mode='rgb')

model = unet()
model_checkpoint = ModelCheckpoint('unet_membrane.hdf5', monitor='loss',verbose=1, save_best_only=True)
model.fit_generator(myGene,steps_per_epoch=300,validation_data=validGene,validation_steps=80,epochs=20,callbacks=[model_checkpoint])

test_path="/scratch/siddharths.scee.iitmandi/vinenet/VineNet/test"
files=os.listdir(test_path+'/images')
files.sort()
testGene = testGenerator(test_path+'/images',as_gray=False)
results = model.predict_generator(testGene,30,verbose=1)
saveResult("results/pred",results)
for i in range(30):
        img = io.imread(os.path.join(test_path+'/masks',files[i].strip('.png')+'_instanceIds.png'),as_gray = False)
        img = trans.resize(img,(256,256))
        io.imsave(os.path.join("results/gt","%d_gt.png"%i),img)
        
