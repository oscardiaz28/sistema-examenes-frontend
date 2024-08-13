import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class NormalGuard implements CanActivate{

    constructor(private loginService : LoginService, private router : Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if( this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'NORMAL' ){
            return true;
        }

        this.router.navigate(['login'])
        return false;
    }

}