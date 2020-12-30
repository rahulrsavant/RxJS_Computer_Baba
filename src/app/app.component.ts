import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RxJs-Computer-baba';
  ngOnInit(): void {
   
    function executor(resolve:Function,reject:Function) {
      let x = 10;
    
    // The producing code (this may take some time)
    
      if (x == 0) {
        resolve("zero");
      }else{
        reject("error")
      }
    }

  new Promise(executor)
  .then(function(value) {  
    console.log("data is :",value);}, 
    )
  .catch( function(error) {  
    console.log("error is ",error);
  })
  .finally( function() {  
    console.log("clean your resourcess here....");
  });


  }



}
  