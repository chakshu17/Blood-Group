import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AngularFireAuth,private router:Router) {}

  ngOnInit(): void {}

  login(f: NgForm) {
    this.auth
      .signInWithEmailAndPassword(f.value.email, f.value.password)
      .then((re) => {
        console.log('Login SuccessFull');
        console.log(re);
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
