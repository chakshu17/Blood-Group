import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {}

  // latitude = 22.7196;
  // longitude = 75.8577;

  ngOnInit(): void {
    this.http
      .get('https://blood-group-e3790.firebaseio.com/Users.json')
      .subscribe(
        (re) => {
          console.log(re);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  logout() {
    this.auth.signOut().then(() => {
      console.log('LogOut Succesfully');
      this.router.navigate(['/']);
    });
  }
}
