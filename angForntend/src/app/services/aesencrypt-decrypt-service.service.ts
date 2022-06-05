import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptServiceService {

  secretKey = "YourSecretKeyForEncryption&Descryption";
  key2 = 'youngunicornsrunfree'
  constructor() { }

  encrypt(value) {
    // return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    debugger
    const a = CryptoJS.AES.encrypt(value, this.secretKey)
    debugger;
    CryptoJS.AES.decrypt(a, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    debugger;
    // https://stackoverflow.com/a/21291804/7770780
  
    return a;
  }

  decrypt(textToDecrypt) {
    debugger;
    return CryptoJS.AES.decrypt(textToDecrypt, this.key2.trim()).toString(CryptoJS.enc.Utf8);
  }


}
