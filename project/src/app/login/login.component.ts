import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  user:any;
  constructor() {
    this.username="";
    this.password="";
    this.user =[{id:1,name:'meghana',email:'19wh1a0522@bvrithyderabad.edu.in',password:'meghana@123'},
                    {id:2,name:'snigdha',email:'19wh1a1204@bvrithyderabad.edu.in',password:'snigdha@123'},
                    {id:3,name:'hanshitha',email:'19wh1a1201@bvrithyderabad.edu.in',password:'hanshitha@123'}
                  ];
   }

  ngOnInit(): void {
  }
 
  loginSubmit2(loginForm : any){
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
   
    }
}