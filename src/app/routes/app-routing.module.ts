import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { HomeComponent } from '../pages/home/home.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from '../pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from '../guards/admin.guard';
import { NormalGuard } from '../guards/normal.guard';
import { LoginGuard } from '../guards/login.guard';
import { ProfileComponent } from '../pages/profile/profile.component';
import { WelcomeComponent } from '../pages/admin/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: DashboardComponent,  canActivate: [AdminGuard], children: [
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'profile', component: ProfileComponent
    }
  ]},

  {path: 'user-dashboard', component: UserDashboardComponent, canActivate: [NormalGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
