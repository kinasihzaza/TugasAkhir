import sys
class ChaesarChiper:
    def encrypt(self, key, plainParam):
        cipher = ''
        for each in plainParam:
            c = (ord(each) + int(key)) % 126
            if c < 32:
                c += 31
            cipher += chr(c)
        return cipher


    def decrypt(self, key, chiperParam):
        cipher = chiperParam
        plaintext = ''
        for each in cipher:
            p = (ord(each) - int(key)) % 126
            if p < 32:
                p += 95
            plaintext += chr(p)
        return plaintext


