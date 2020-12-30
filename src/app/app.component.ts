import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    const pr=new Promise(()=>{
      setTimeout(()=>{
        console.log('done');
      });
    })
    
  }

  title = 'RxJs-Computer-baba';
}
