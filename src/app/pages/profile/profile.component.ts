import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

interface User{
  id: string,
  username: string,
  nombre: string,
  apellido : string,
  email : string,
  telefono : number,
  perfil : string,
  roles: String[]
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user! : User;
  
  constructor(private loginService : LoginService){}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

}
