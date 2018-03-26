import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import {RegistrationComponent} from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {PersonalInfoComponent} from './personalInfo/personalInfo.component'
import { FooterComponent } from './footer/footer.component';
import { FirstViewComponent } from './firstView/firstView.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    GameComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginFormComponent,
    PersonalInfoComponent,
    FirstViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: 'registration', component: RegistrationComponent },
        {path: 'loginForm', component: LoginFormComponent},
        {path: 'personalInfo', component: PersonalInfoComponent},
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }