import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



}
