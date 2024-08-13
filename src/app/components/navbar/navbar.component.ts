import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  loginStatus! : boolean;

  constructor(public loginService : LoginService, private router : Router){}

  ngOnInit(): void {
    this.loginService.loginStatus$.subscribe( status => this.loginStatus = status )
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login'])
  }


}
