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

//=========================== OBSERVABLE ======================================
const obs=new MyObservable(function subscribe(observer:any) {
  //producer
  let counter=1;                                                                          
/*   const producer=setInterval(()=>{
    observer.next(counter++);
  },1000);
  observer.complete(); */

  observer.next('hello');
  observer.complete();
  observer.next('world');

  return ()=>{
   //   clearInterval(producer);
  };
});



//==================== OBSERVER ==========================================
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

  class MyObservableGuard{
    observer:any;
    isUnsubscribe:any;
    closeFn:any;
    constructor(observer:any){
      this.observer=observer;
      this.isUnsubscribe=false;
    }
    next(data:any){
      if(this.isUnsubscribe || !this.observer.next){
        return;
      }
      
      try {
        this.observer.next(data);
      } catch (error) {
        this.observer.unsubscribe();
        throw error;
      }
    }
    error(err:any){
      if(this.isUnsubscribe || !this.observer.console.error){//if somone not handle error message
        return;
      }
      try{
      this.observer.error(err);
      }catch(innerError){
        this.unsubscribe();
        throw innerError;
      }
      this.observer.unsubscribe();      
    }
    complete(){
      if(this.isUnsubscribe || !this.observer.complete){
        return;
      }

      try{
        this.observer.complete();
      }catch(err){
        this.unsubscribe();
        throw err;
      }
      
      this.unsubscribe();
    }

    unsubscribe(){
      this.isUnsubscribe=true;
      if(this.closeFn)
      {
         this.closeFn();
      }     
    }
  }
//==================================================================
  class MyObservable{
    observable:any;
    observer:any;
    
      constructor(observable:any){
    this.observable=observable;
      }
    
      subscribe(observer:any){
       const myObservableGuard:any=new MyObservableGuard(observer);
        const closeFn=this.observable(myObservableGuard);
        myObservableGuard.closeFn=closeFn;
        return closeFn;
      }   
    
    }
    //=============================================================