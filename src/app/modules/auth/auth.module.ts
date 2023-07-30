import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { RegisterComponent } from './components/feature/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/feature/login/login.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
