import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AESEncryptDecryptServiceService } from './services/aesencrypt-decrypt-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  API_URL: string = 'http://localhost:3000';
  title = 'angForntend';

  constructor(private http: HttpClient, private _AESEncryptDecryptServiceService: AESEncryptDecryptServiceService) { }


  signIn() {

    this.http.get(this.API_URL + '/token/sign')
      .subscribe(
        (res) => {
          console.log(res);
          if (res['token']) {

            localStorage.setItem('token', res['token']);
            alert('Sign in successfully')
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getPath() {

    this.http.get(this.API_URL + '/path1')
      .subscribe(
        (res) => {
          console.log(res);
          alert('Get path done')
        },
        (err) => {
          alert(err['statusText']);
          console.log(err);
        }
      );
  }

  EncryptedCall() {
    let body = {
      "id": 1,
      "Name": "Arqam Rafay"
    }
    debugger;
    // Use encrypt / decrypt functions
    // let encryptedText = this._AESEncryptDecryptServiceService.encrypt("Hello World");
    // let decryptedText = this._AESEncryptDecryptServiceService.decrypt(encryptedText);

    // let encryptedText = this._AESEncryptDecryptServiceService.encrypt(JSON.stringify(body));
    debugger;
    // let decryptedText = this._AESEncryptDecryptServiceService.decrypt(encryptedText);

    let body2 = {
      "id": 2,
      "Name": "Rafay"
    };

    let encryptedText = this._AESEncryptDecryptServiceService.encrypt(JSON.stringify(body2));
    debugger;
    // console.log('Encrypted API call here');
    this.http.post(this.API_URL + '/encryptedData', body2).subscribe((res) => {
      debugger;
      console.log(res['_encrypted'])

      var decrypted = this._AESEncryptDecryptServiceService.decrypt(res['_encrypted']);
      debugger;
      console.log(decrypted.toString());
      debugger;

    },
      (error) => {
        debugger
      })

  }
}
