import { UserDto } from '@Core/Microservices/Models/User/user.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fw-chat-contacts',
  templateUrl: './fw-chat-contacts.component.html',
  styleUrls: ['./fw-chat-contacts.component.scss']
})
export class FwChatContactsComponent implements OnInit {
    private _Users: UserDto[] = [];

    public get Users(): UserDto[] {
        return this._Users;
    } 

    constructor() { 
        this._Users = [
            {
              coduser: "1",
              name: "User 1",
              email: "",
              password: "",
              token: "",
            },
            {
              coduser: "2",
              name: "User 2",
              email: "",
              password: "",
              token: "",
            },
            {
              ... new UserDto(),
              coduser: "3",
              name: "User 3",
            },
            {
              ... new UserDto(),
              coduser: "4",
              name: "User 4",
            },
            {
              ... new UserDto(),
              coduser: "5",
              name: "User 5",
            },
            {
              ... new UserDto(),
              coduser: "6",
              name: "User 6",
            },
            {
              ... new UserDto(),
              coduser: "7",
              name: "User 7",
            },
            {
              ... new UserDto(),
              coduser: "8",
              name: "User 8",
            },
            {
              ... new UserDto(),
              coduser: "9",
              name: "User 9",
            }
          ]
    }
  
    ngOnInit(): void {
    }


}
