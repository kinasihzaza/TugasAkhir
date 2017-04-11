from flask import json, Flask, request
#import caesarChiper
#import RC4Chiper
from Crypto.Cipher import ARC4
app = Flask(__name__)

instanceRC4 = RC4Cipher.RC4Cipher()

#conn = cx_Oracle.connect('<Connection String')

@app.route('/', methods=['GET','POST'])
def root():
    return "Halo"

@app.route('/sample', methods=['GET', 'POST'])
def api_message():
    if request.headers['Content-Type'] == 'text/plain':
        return "Text Message: " + request.data

    elif request.headers['Content-Type'] == 'application/json':
        return "JSON Message: " + json.dumps(request.json)

    elif request.headers['Content-Type'] == 'application/octet-stream':
        f = open('./binary', 'wb')
        f.write(request.data)
        f.close()
        return "Binary message written!"

    else:
        return "415 Unsupported Media Type ;)"

@app.route('/en', methods=['GET', 'POST'])
def encrypt_method():
    if request.headers['Content-Type'] == 'application/json':
        print "Request JSON : "+str(request.data)
        '''ALGO
            1) Bongkar
            2) Masukin Variable
            3) Masukin Variable Ke Method Enkrip
            4) Nerima Return Dari Method Enkrip
            5) Return ke Client dalam bentuk JSON
        '''
        ## Bongkar Bungkusan dari Client dan dimasukin variable ##
        payLoadFromClient = json.loads(request.data)
        varSender = payLoadFromClient['from']
        varReceiver = payLoadFromClient['to']
        varKey = payLoadFromClient['data'][0]['key']
        varText = payLoadFromClient['data'][0]['text']

        ## Panggil Instance, Masukin ke method ##
        resultFromEncrypMethod = instanceRC4.encrypt(varKey, varText)
        print resultFromEncrypMethod

        returnForClient = {'from':varSender, 'to':varReceiver, 'data':[
            {'text':resultFromEncrypMethod}
        ]}

        return "WebService Encrypted JSON : "+json.dumps(returnForClient)

    elif request.headers['Content-Type'] == 'application/octet-stream':
        f = open('./binary', 'wb')
        f.write(request.data)
        f.close()
        return "Binary message written!"

    else:
        return "415 Unsupported Media Type ;)"

@app.route('/de', methods=['GET', 'POST'])
def decrypt_method():
    if request.headers['Content-Type'] == 'application/json':
        print "Request JSON : "+str(request.data)
        '''ALGO
            1) Bongkar
            2) Masukin Variable
            3) Masukin Variable Ke Method Dekrip
            4) Nerima Return Dari Method Dekrip
            5) Return ke Client dalam bentuk JSON
        '''
        ## Bongkar Bungkusan dari Client dan dimasukin variable ##
        payLoadFromClient = json.loads(request.data)
        varSender = payLoadFromClient['from']
        varReceiver = payLoadFromClient['to']
        varKey = payLoadFromClient['data'][0]['key']
        varText = payLoadFromClient['data'][0]['text']

        ## Panggil Instance, Masukin ke method ##
        ## Masukin Result ke variable
        resultFromDecryptMethod = instanceRC4.decrypt(varKey, varText)

        ## Check Hasil
        print resultFromDecryptMethod

        ## Bungkus dalam bentuk JSON
        returnForClient = {'from':varSender, 'to':varReceiver, 'data':[
            {'text':resultFromDecryptMethod}
        ]}

        ## Kirim Ke Client
        return "WebService Decrypted JSON : "+json.dumps(returnForClient)

    elif request.headers['Content-Type'] == 'application/octet-stream':
        f = open('./binary', 'wb')
        f.write(request.data)
        f.close()
        return "Binary message written!"

    else:
        return "415 Unsupported Media Type ;)"

if __name__ == '__main__':
	app.run(
		host="0.0.0.0",
		port=int(6000),
        debug=True,
        threaded=True
)
