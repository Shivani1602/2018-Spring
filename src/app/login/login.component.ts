import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Fitness, User } from '../models/fitness';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Model = new Fitness();
    Me: User;
    private _api = "http://localhost:8080/fitness";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  
  login(name: string){
    this.http.get(this._api+ "/fitness" , { params : { playerId: name } })
    .subscribe(data=> this.Me =  {Name: name } )
  }
}

