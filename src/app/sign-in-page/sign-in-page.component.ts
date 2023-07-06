import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null)
    })
  }

  signIn() {
    
  }

}