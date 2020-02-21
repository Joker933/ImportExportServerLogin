import { Component, OnInit } from '@angular/core';
import Key from '../Key';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private url = 'http://85.160.64.233:3000/session/login';
  private email = '';
  private password = '';
  private shrek = false;

  runLog() {
    this.http
      .post(this.url, {email: this.email, password: this.password})
      .subscribe(
        (data: any) => {
         Key.access = data.access_token;
         console.log(Key.access);
         this.router.navigate(['/logged']);
        }, (error) => {
          this.shrek = true;
        }
      );
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

}
