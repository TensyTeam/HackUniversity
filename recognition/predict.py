from PIL import Image
import PIL.ImageOps  
import numpy as np
from keras.models import load_model
from keras.utils import to_categorical #
import pandas as pd

import sys

with open('../input/{}.jpg'.format(sys.argv[1]), 'rb') as file:
	img = Image.open(file).convert('LA')
	# img = PIL.ImageOps.invert(img)
	# img.show()
	img = img.resize((28, 28))
	# # img.show()
	pixels = np.asarray(img)[:,:,0].reshape((1,-1))
	# print(pixels)
	# # pixels = numpy.resize(pixels, (128,128))  # this line here!!!
	# # print(pixels[len(pixels)//2, len(pixels)//2])
	# # img = Image.fromarray(pixels)
	# # img.show()

	# # print(pixels)
	# pixels = pixels[0]
	# pixels = [255 - i for i in pixels]
	# pixels = np.array([pixels])
	# # print(pixels)
	pixels = pixels.reshape((-1, 28, 28, 1))

	model = load_model('../input/model.txt')
	# # print(model.evaluate(pixels))

	# data_test = pd.read_csv('../input/fashion-mnist_test.csv')
	# img_rows, img_cols = 28, 28
	# input_shape = (img_rows, img_cols, 1)


	# X_test = np.array(data_test.iloc[:, 1:])
	# y_test = to_categorical(np.array(data_test.iloc[:, 0]))

	# X_test = X_test.reshape(X_test.shape[0], img_rows, img_cols, 1)
	# X_test = X_test.astype('float32')

	# X_test /= 255

	# batch_size = 256
	# num_classes = 10

	# img_rows, img_cols = 28, 28

	# print(len(X_test), len(X_test[0]), len(X_test[0][0]), len(X_test[0][0][0]))

	# score = model.evaluate(X_test, y_test, verbose=0)

	# print('Test loss:', score[0])
	# print('Test accuracy:', score[1])

	print(('футболка', 'джинсы / брюки / штаны', 'кофта', 'платье', 'куртка / пальто', 'открытая обувь', 'рубашка', 'ботинки / кроссовки', 'сумка', 'высокая обувь')[list(map(int, model.predict(pixels)[0])).index(1)])