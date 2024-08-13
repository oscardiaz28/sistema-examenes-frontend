import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})

/**
 * Los guardianes son clases que se utilizan para controlar la navegacion y proteger las rutas de una aplicacion.
 */

// Guardian para determinar si se puede activar una ruta , se utiliza para controlar el acceso a una ruta especifica
export class AdminGuard implements CanActivate {

    constructor(private loginService : LoginService, private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

        if(this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'ADMIN' ){
            return true;
        }

        this.router.navigate(['login'])
        return false;
    }

}