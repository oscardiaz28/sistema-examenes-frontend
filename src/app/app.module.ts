import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from './component.module';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routes/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ComponentModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    //Registrar el interceptor en el modulo main
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
