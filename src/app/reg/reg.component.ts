import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  private url = 'http://85.160.64.233:3000/session/register';
  private password = '';
  private username = '';
  private email = '';
  private passMatch = '';
  private shrek = false;

  runReg() {
    if (this.password === this.passMatch) {
    this.http
      .post(this.url, {username: this.username, email: this.email, password: this.password, passMatch: this.passMatch})
      .subscribe(
        (data: any) => {
          this.router.navigate(['/base']);

        }, (error) => {
          this.shrek = true;
        }
      );
    } else {
      this.shrek = true;
    }
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

}
