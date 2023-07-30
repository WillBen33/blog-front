import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.compose([Validators.required, Validators.email])]],
      password: ["", [Validators.required]],
      passwordVerification: ["", [Validators.required]]
    })
  }

  register() {
    console.log("ok")
  }
}
