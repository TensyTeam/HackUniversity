import cloudinary
import cloudinary.uploader as upl
import http.client, urllib.request, urllib.parse, urllib.error, base64

import json


def predict(name):
	# Загрузка изображения

	cloudinary.config( 
		cloud_name='dprectwav',
		api_key='431431413499594',
		api_secret='lciw_8akcpNdDOWcKHaupA7XvCk',
	)

	res = upl.upload(name, public_id = 'test1')

	print(res['url'])

	# API

	headers = {
		'Ocp-Apim-Subscription-Key': '',
		'Ocp-Apim-Subscription-Key': '7c46c41c9ef4484b942c48b5fb1de880',
	}

	params = urllib.parse.urlencode({
		'image': res['url'],
	})

	try:
		conn = http.client.HTTPSConnection('api.mirrorthatlook.com')
		conn.request("GET", "/v2/classify?%s" % params, "", headers)
		response = conn.getresponse()
		data = response.read()

		conn.close()

		res = json.loads(data)
		return res['result'][0]['label']

	except Exception as e:
		print("[Errno {0}] {1}".format(e.errno, e.strerror))
	
	return 'Не удалось определить категорию'
