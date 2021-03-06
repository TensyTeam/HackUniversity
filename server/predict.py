from PIL import Image
# import PIL.ImageOps
import numpy as np
import keras
from keras.models import load_model


CATEGORIES = (
			  'футболка', 'джинсы / брюки / штаны', 'кофта', 'платье', 
			  'куртка / пальто', 'рубашка', 'открытая обувь',
			  'ботинки / кроссовки', 'сумка', 'высокая обувь'
			  )

def predict(name):
	keras.backend.clear_session()
	with open(name, 'rb') as file:
		img = Image.open(file).convert('LA')
		# img = PIL.ImageOps.invert(img)
		# img.show()
		img = img.resize((28, 28))

		pixels = np.asarray(img)[:,:,0].reshape((1,-1))
		# pixels = [255 - i for i in pixels]
		# pixels = np.array([pixels])
		# # print(pixels)
		pixels = pixels.reshape((-1, 28, 28, 1))

		model = load_model('../model.txt')

		try:
			return CATEGORIES[list(map(int, model.predict(pixels)[0])).index(1)]
		except:
			return 'Не удалось определить категорию!'