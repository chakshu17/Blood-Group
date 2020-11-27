import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material/material.module';

import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
