import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { delay, of, Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  form! : FormGroup;
  formSubmitedd : boolean = false;
  error : string | null =  null;
  loading! : boolean;
  private loadingSubscription! : Subscription; 

  constructor(
    private fb : FormBuilder,
    private loginService : LoginService,
    private loaderService : LoaderService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      'username': ['', [Validators.required] ],
      'password': ['', Validators.required]
    })
    this.loadingSubscription = this.loaderService.loading$.subscribe( value => this.loading = value )
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

 
  get username(){
    return this.form.get('username') as FormControl;
  }

  get password(){
    return this.form.get('password') as FormControl;
  }

  login(){
    this.formSubmitedd = true;
    this.loaderService.show();
    if( this.form.valid ){

      of(null).pipe(
        delay(3000) //delay de 3s
      ).subscribe( () => {
        this.loginService.login(this.form.value).subscribe( {
          next: (data => {
            if( data.status ){
              console.log(data)
              this.loginService.setToken(data.token);
              this.loginService.setUser(data.usuario);

              const rol = this.loginService.getUserRole();
              if(rol === 'ADMIN'){
                this.loginService.setLoginStatus();
                // window.location.href = '/admin'
                this.router.navigate(['admin'])
                
              }else{
                this.loginService.setLoginStatus();
                // window.location.href = 'user-dashboard'
                this.router.navigate(['user-dashboard'])
              }

            }
            this.error = null;
            this.loaderService.hide();
          }),
          error: ( (err) => {
            this.error = err.error.message
            this.loaderService.hide();
          } )
        })

      })

    }
  }

}
