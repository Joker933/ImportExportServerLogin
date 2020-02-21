import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  private username = '';
  private email = '';
  private id = '';
  private url = 'http://85.160.64.233:3000/user';
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

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient) {
    const headers = new HttpHeaders().set('User-Token', Key.access);

    this.http
      .get(this.url, {headers})
      .subscribe(
        (data: any) => {
         Key.access = data.access_token;
          this.id = data.id;
          this.email = data.email;
          this.username = data.username;
        }, (error) => {
        }
      );
    
      
   }
  ngOnInit() {
  }

}
