import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { getErrors } from '../../services/helper';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  form! : FormGroup;
  formSubmitedd : boolean = false;

  constructor(private fb : FormBuilder, private userService : UserService, private router : Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'username': ['', Validators.required],
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'telefono': ['', Validators.required]
    })
  }

  signup(){
    this.formSubmitedd = true;

    if( this.form.valid ){
      console.log(this.form.value)
      this.userService.saveUser(this.form.value).subscribe( {
        next: ( data => {
          if(data.status){
            Swal.fire({
              title: 'Usuario registrado',
              text: 'Usuario registrado con exito en el sistema',
              icon: 'success'
            }).then( () => {
              this.router.navigate(['login']);
            } )
          }
        }),
        error: (err : any ) => console.log(err) 
      })

      this.formSubmitedd = false;
    }
  }

}
