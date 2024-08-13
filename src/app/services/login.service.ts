import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new BehaviorSubject<boolean>(false);
  loginStatus$ = this.loginStatusSubject.asObservable();

  constructor(private http : HttpClient) {
    const token = localStorage.getItem('token');
    if(token){
      this.loginStatusSubject.next(true);
    }
  }

  setLoginStatus(){
    this.loginStatusSubject.next(true);
  }

  setLogoutStatus(){
    this.loginStatusSubject.next(false);
  }

  login(data : any) : Observable<any>{
    return this.http.post(`${baseUrl}/auth/login`, data);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if( token == undefined || token == '' || token == null ){
      return false;
    }
    return true;
  }

  setToken(token : string){
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginStatusSubject.next(false);
    return true;
  }

  getToken(){
    return localStorage.getItem('token')
  }

  setUser(user : any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    let userStr = localStorage.getItem('user')
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  getUserRole(){
    let user = this.getUser();
    return user.roles[0];
  }

}
