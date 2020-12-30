import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RxJs-Computer-baba';
  ngOnInit(): void {
   
    function testFunction(A:Function, B:Function) {
      let x = 0;
    
    // The producing code (this may take some time)
    
      if (x == 0) {
        A("OK..","second");
      } else {
        B("Error..");
      }
    }

    let myPromise = new Promise(testFunction);
    
    myPromise.then(
      function(value) {  console.log(value);},
    );

    myPromise.catch(
      function(error) {  console.log(error);}
    );
    myPromise.finally(
      function() {  console.log("clean your resourcess here....");}
    );
  }



}
  