import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit{
  user: User = {
    name: "Jhon Smith",
    role: "Super Admin",
    email: "test@gmail.com",
    avatarUrl: "../../assets/images/user-icon.jpg"
  }

  constructor() {}

  ngOnInit(): void {  }
}
