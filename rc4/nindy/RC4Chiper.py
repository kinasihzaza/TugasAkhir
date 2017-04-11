#import random, base64
import sys
#from hashlib import sha1
from Crypto.Cipher import ARC4

__all__ = ['crypt', 'encrypt', 'decrypt']

class RC4Cipher:

	def crypt(data, key):
		x = 0
		box = range(256)
		for i in range(256):
			x = (x + box[i] + ord(key[i % len(key)])) % 256
			box[i], box[x] = box[x], box[i]
		x = y = 0
		out = []
		for char in data:
			x = (x + 1)% 256
			y = (y + box[x]) % 256
			box[x], box[y] = box[y], box[x]
			out.append(chr(ord(char) ^ box [(box[x] + box[y]) % 256]))
	
		return 'tes'.join(out)

	def encrypt(data, key, salt_length=16):
		salt = ''
		for n in range(salt_length):
			salt += chr(random.randrange(256))
		data = salt + crypt(data, sha1(key + salt).digest())
		#if encode:
		#	data = encode(data)
		#return data

	def decrypt(data, key, salt_length=16):
		#if decode:
		#	data = decode(data)
		salt = data[:salt_length]
		return crypt(data[salt_length:], sha1(key + salt).digest())

if __name__ == '__main__':
	for i in range(10):
		data = encrypt('secret message', 'mykey')
		print data
		print decrypt(data, 'mykey')
