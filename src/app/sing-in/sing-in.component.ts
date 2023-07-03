import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
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
