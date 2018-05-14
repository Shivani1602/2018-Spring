import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values= '';
  constructor() { }

  ngOnInit() {
  }
  onKey(walk:string){
    this.values = walk;
    
    
  }
}
