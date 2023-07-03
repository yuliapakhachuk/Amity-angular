import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit{
  user: User = {
    firstName: "Ayeni",
    lastName: "Olohije",
    role: "Amity Administrator",
    email: "test@gmail.com",
    phone: "+1 999 399 299",
    avatarUrl: ""
  }

  isAvatarPhotoDownloaded!: boolean;

  constructor() {}

  ngOnInit(): void { 
    this.isAvatarPhotoDownloaded = this.user.avatarUrl === "" 
  }
}
