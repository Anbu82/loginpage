import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginpage';
  username:string=""
  password:string=""
  // showElements:any
  constructor(private route:Router, private authService : AuthService){}
  save(){
    // this.showElements = false
    if(this.username=="admin" && this.password=="admin"){
      this.route.navigate(['./home'])
    }
    else{
      console.log("login failed")
    }
  
  }

}
