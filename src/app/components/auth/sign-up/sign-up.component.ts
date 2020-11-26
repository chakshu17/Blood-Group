import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  // constructor(private firebase: FirebaseApp) {}
  constructor(private firebase: FirebaseApp, private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  signUp(f: NgForm) {
    console.log(f.value.email, f.value.password);
    this.auth
      .createUserWithEmailAndPassword(f.value.email, f.value.password)
      .then((result) => {
        // yaha pr querry chlao data databse me store krne ki.
        // phir yaha se login page pr sara data lekr home page pr navigate kro.
        // 
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    // this.firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(f.value.email, f.value.password)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
