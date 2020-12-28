import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(){}

 title="title";

  ngOnInit(): void {


const obs=new MyObservable(function subscribe(observer:any) {
  //producer
  let counter=1;                                                                          
  const producer=setInterval(()=>{
    observer.next(counter++);
  },1000);
  observer.complete();

  return ()=>{
      clearInterval(producer);
  };
});

const subsription=obs.subscribe({
    next:(data: any) => console.log(data),
    error:(err: any) => console.log('error',err),
    complete:() => console.log('done')    
  });  

  setTimeout(()=>{
    subsription();
  },5000);


  }// ng On init

}// class App component


//======================================================
class MyObservable{
  observable:any;
  
    constructor(observable:any){
  this.observable=observable;
    }
  
    subscribe(observer:any){
      const closeFn=this.observable(observer);
      return closeFn;
    }   
  
  }