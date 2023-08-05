import { ChatDto } from '@Core/Microservices/Models/Chat/chat.dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fw-chat-message',
  templateUrl: './fw-chat-message.component.html',
  styleUrls: ['./fw-chat-message.component.scss']
})
export class FwChatMessageComponent implements OnInit {
  private _Id: string = "";
  private _Message: ChatDto = new ChatDto();

  @Input("Message")
  set Message(message: ChatDto) {
    this._Message = message ? message : new ChatDto();
  }

  @Input("Id")
  set Id(id: string) {
    this._Id = id ? id : "";
  }

  get Message() {
    return this._Message;
  }

  get Id() {
    return this._Id;
  }



  constructor() {
  }

  ngOnInit(): void {
  }



}
