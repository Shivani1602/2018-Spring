import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  

})
export class HomeComponent implements OnInit {
  values = '';
  constructor() { }

  ngOnInit() {
  }
  onKey(walk:string){
    this.values = walk;
  }

}
