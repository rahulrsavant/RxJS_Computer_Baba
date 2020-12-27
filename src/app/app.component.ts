import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(){}

 title="title";

  ngOnInit(): void {


function Observable(observer:any) {
  //producer
  let counter=1;                                                                          
  const producer=setInterval(()=>{
    observer.next(counter++);
  },1000);

  return ()=>{
      clearInterval(producer);
  };
}

const closeFn=Observable({
    next:(data: any) => console.log(data),
    error:(err: any) => console.log('error',err),
    complete:() => console.log('done')    
  });  
  
  setTimeout(()=>{
    closeFn();
  },5000);
}
}
