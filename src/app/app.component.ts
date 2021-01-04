import { Component, OnInit } from '@angular/core';
import { fromEvent, interval,of,range,concat,from, Subscription } from 'rxjs';
import { map, filter, scan, concatAll,max, bufferCount } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { buffer } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RxJs-Computer-baba';

  sub1: Subscription = new Subscription;

  value:any;

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {

    let btn :any= document.getElementById("btnclick");

//let btn_clicks = fromEvent(btn, 'click');
let interval_events = interval(1000);
let buffered_array = interval_events.pipe(bufferCount(4));
buffered_array.subscribe(x => console.log(x));


    /*
    let btn :any= document.getElementById("btnclick");

let btn_clicks = fromEvent(btn, 'click');
let interval_events = interval(1000);
let buffered_array = interval_events.pipe(buffer(btn_clicks));
buffered_array.subscribe(arr => console.log(arr));
*/

/*
    let all_nums = of(1, 6, 15, 10, 58, 20, 40);
    let final_val = all_nums.pipe(max());
    final_val.subscribe(x => console.log("The Max value is "+x));

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((value: any) => {  console.log(value)      
    }, (error: any) => error, () => {           
});
*/
  }



}
