import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  login(f: NgForm) {
    this.auth
      .signInWithEmailAndPassword(f.value.email, f.value.password)
      .then((re) => {
        console.log('Login SuccessFull');
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
