import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    // private db: AngularFirestore,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  signUp(f: NgForm) {
    const data = {
      name: f.value.name,
      email: f.value.email,
      phoneNumber: f.value.phoneNumber,
      bloodGroup: f.value.bloodGroup,
      address: f.value.address,
    };
    this.auth
      .createUserWithEmailAndPassword(f.value.email, f.value.password)
      .then((result) => {
        console.log('Authentication Success');
        // yaha pr querry chlao data databse me store krne ki.
        // phir yaha se login page pr sara data lekr home page pr navigate kro.
        // this.db
        //   .collection('Users')
        //   .add(data)
        //   .then((re) => {
        //     console.log('Success');
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        this.http
          .post('https://blood-group-e3790.firebaseio.com/Users.json', data)
          .subscribe((re) => {
            console.log('Data Successfully Listed');
            console.log(re);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
