import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  private url2 = 'http://85.160.64.233:3000/session/logout';

  runLogOut() {
    const headers = new HttpHeaders().set('User-Token', Key.access);

    this.http2
    .delete(this.url2, {headers})
    .subscribe(
      (data: any) => {
       Key.access = '';
       console.log(Key.access);
      }, (error) => {
      }
    );
  }

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient) { }

  ngOnInit() {
  }

}
