import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  API_URL: string = 'http://localhost:3000';
  title = 'angForntend';

  constructor(private http: HttpClient) { }


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
    this.http.get(this.API_URL + '/path1')
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }



}
