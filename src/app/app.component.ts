import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'change detection' ;
  counter = 0;

  constructor(){
    // setInterval(() => this.incrementCounter(), 2000)
  }

  getInfo(){
    const msg = 'Metoda getInfo(); counter: ' + this.counter;
    console.log(msg);
    return msg;
  }

  getCounter(){
    console.log('getCounter(): ' + this.counter)
    return this.counter
  }

  incrementCounter(){
    this.counter++;
    console.log("incrementCounter(): " + this.counter)
  }
}