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
            debugger;
            localStorage.setItem('token', res['token']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getPath() {
    debugger;
    this.http.get(this.API_URL + '/path1')
      .subscribe(
        (res) => {
          console.log(res);
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

    let encryptedText = this._AESEncryptDecryptServiceService.encrypt(JSON.stringify(body));
    debugger;
    let decryptedText = this._AESEncryptDecryptServiceService.decrypt(encryptedText);

    // console.log('Encrypted API call here');
    this.http.post(this.API_URL + '/encryptedData', encryptedText).subscribe((res) => {
      debugger;
    },
      (error) => {
        debugger
      })

  }
  // How to create service api through commant in angular
  // https://stackoverflow.com/questions/45068925/how-to-use-cryptojs-with-angular-4

}
