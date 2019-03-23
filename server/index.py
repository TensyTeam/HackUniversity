from flask import Flask, jsonify, request

import os
import re
import requests
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

LINK = '0.0.0.0:5000'

# Загрузка изображения

def max_image(url):
	x = os.listdir(url)
	k = 0
	for i in x:
		j = re.findall(r'\d+', i)
		if len(j) and int(j[0]) > k:
			k = int(j[0])
	return k+1

# def load_image(data, url, name=None, form='png', type='base64'):
# 	# Декодирование Base64

# 	if type == 'base64':
# 		if 'data:' in data:
# 			ind = data.index('base64,')
# 			data = data[ind+6:]

# 		print(data[:-10])

# 		data = base64.b64decode(data)

# 	# Имя файла

# 	if name:
# 		name = str(name)

# 		for i in os.listdir(url):
# 			if re.search(r'^' + name + '\.', i):
# 				os.remove(url + '/' + i)
# 	else:
# 		name = str(max_image(url))
	
# 	# Запись

# 	with open('{}/{}.{}'.format(url, name, form), 'wb') as file:
# 		file.write(data)
	
# 	#

# 	return name

# def reimg(s):
# 	k = 0

# 	while True:
# 		x = re.search(r'<img ', s[k:])

# 		if x:
# 			st = list(x.span())
# 			st[1] = st[0] + s[k+st[0]:].index('>')
# 			vs = ''

# 			if 'src="' in s[k+st[0]:k+st[1]]:
# 				if re.search(r'image/.*;', s[k+st[0]:k+st[1]]) and 'base64,' in s[k+st[0]:k+st[1]]:
# 					start = k + st[0] + s[k+st[0]:].index('base64,') + 7
# 					stop = start + s[start:].index('"')

# 					b64 = s[start:stop]
# 					form = re.search(r'image/.*;', s[k+st[0]:start]).group(0)[6:-1]
# 					adr = load_image(b64, 'load', form=form)

# 					# vs = '<img src="{}static/load/{}.{}">'.format(LINK, adr, form)
# 					vs = '<img src="/load/{}.{}">'.format(adr, form)

# 				else:
# 					start = k + re.search(r'src=".*', s[k:]).span()[0] + 5
# 					stop = start + s[start:].index('"')
# 					href = s[start:stop]

# 					if href[:4] == 'http':
# 						b64 = str(base64.b64encode(requests.get(href).content))[2:-1]
# 						form = href.split('.')[-1]
# 						if 'latex' in form:
# 							form = 'png'

# 						adr = load_image(b64, 'load', form=form)
# 						vs = '<img src="/load/{}.{}">'.format(adr, form)

# 			if vs:
# 				s = s[:k+st[0]] + vs + s[k+st[1]+1:]
# 				k += st[0] + len(vs)
# 			else:
# 				k += st[1]
# 		else:
# 			break

# 	return s

#

@app.route('/', methods=['POST'])
def index():
	# x = request.json
	# print(x)
	# load_image(x['data'], 'load')

	data = request.files['file']
	# print(data)

	n = max_image('load')

	data.save('load/{}.png'.format(n))

	# load_image(data, 'load', type=None)

	return jsonify({'error': 0})

app.run(port=5000)