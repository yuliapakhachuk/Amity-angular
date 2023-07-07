import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-password-eye',
  templateUrl: './show-password-eye.component.html',
  styleUrls: ['./show-password-eye.component.scss']
})
export class ShowPasswordEyeComponent {

  // isShowPasswordInEyeComp: boolean = false;

  @Input() isShowPassword: boolean = false;;
  @Output() isShowPasswordChange = new EventEmitter<boolean>();

  showOrHidePassword():void {
    this.isShowPassword = !this.isShowPassword;
    this.isShowPasswordChange.emit(this.isShowPassword);
  }
}
