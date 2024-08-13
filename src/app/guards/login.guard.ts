import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    constructor(private loginService : LoginService, private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if( this.loginService.isLoggedIn() ){
            const rol = this.loginService.getUserRole();
            switch(rol){
                case 'ADMIN':
                    this.router.navigate(['admin'])
                    break;
                case 'NORMAL':
                    this.router.navigate(['user-dashboard'])
                    break;
            }
            return true;
        }
        if( !this.loginService.isLoggedIn() ) this.router.navigate(['login'])
        return false;
    }

}