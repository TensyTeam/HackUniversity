from flask import Flask, jsonify, request

import os
import re
import requests
import base64
from flask_cors import CORS

# from pred import predict
from predict import predict


app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

CATEGORIES = (
			  'футболка', 'джинсы / брюки / штаны', 'кофта', 'платье', 
			  'куртка / пальто', 'рубашка'
			  )

# Загрузка изображения

def max_image(url):
	x = os.listdir(url)
	k = 0
	for i in x:
		j = re.findall(r'\d+', i)
		if len(j) and int(j[0]) > k:
			k = int(j[0])
	return k+1


@app.route('/', methods=['POST'])
def index():
	data = request.files['file']
	n = max_image('load')
	name = 'load/{}.png'.format(n)
	data.save(name)

	# ML

	return jsonify({'category': predict(name)})


app.run('0.0.0.0', port=5000)