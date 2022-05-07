import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptServiceService {

  secretKey = "YourSecretKeyForEncryption&Descryption";
  constructor() { }

  encrypt(value) {
    // return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    return CryptoJS.AES.encrypt(value, this.secretKey.trim());
  }

  decrypt(textToDecrypt) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }


}
