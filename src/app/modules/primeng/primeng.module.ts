import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    EditorModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    EditorModule
  ]
})
export class PrimengModule { }
