import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private firebase: FirebaseApp) {}

  ngOnInit(): void {}

  signUp(f: NgForm) {
    this.firebase
      .auth()
      .createUserWithEmailAndPassword(f.value.email, f.value.password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
