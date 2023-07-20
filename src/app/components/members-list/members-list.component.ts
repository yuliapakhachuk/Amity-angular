import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit{
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
