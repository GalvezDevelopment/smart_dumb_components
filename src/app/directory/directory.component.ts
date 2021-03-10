import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [UsersService]
})
export class DirectoryComponent implements OnInit {
  usersFound = new Array<any>();

  constructor(public usersSrv: UsersService) { }

  ngOnInit(): void {
  }

  public findUsersByAge(age: number): void {
    this.usersFound = this.usersSrv.getUsersByAge(age);
  }

}
