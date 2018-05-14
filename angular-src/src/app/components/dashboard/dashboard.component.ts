import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  walkValues= '';
  runValues= '';
  cycleValues= '';
  sleepValues= '';
  constructor() { }

  ngOnInit() {
  }
  onKeywalk(walk:string){
    this.values = walk;
  }
  onKeyrun(run:string){
    this.runValues = run;
  }
  onKeycycle(cycle:string){
    this.cycleValues =cycle;
  }
  onKeysleep(sleep:string){
    this.sleepValues = sleep;
  }
}
}
