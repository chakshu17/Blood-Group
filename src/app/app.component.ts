import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bloodGroupApp';
  // latitude = 22.7196;
  // longitude = 75.8577;

  onChooseLocation(event){
    console.log(event);
    // this.latitude=event.cords.lat
    // console.log(this.latitude);


  }
}
