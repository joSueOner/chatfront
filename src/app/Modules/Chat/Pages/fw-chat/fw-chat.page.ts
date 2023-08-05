import { ChatDto } from '@Core/Microservices/Models/Chat/chat.dto';
import { ChatWebsocketService } from '@Core/Services/WebSockets/chat.websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fw-chat',
  templateUrl: './fw-chat.page.html',
  styleUrls: ['./fw-chat.page.scss']
})
export class FwChatPage implements OnInit {
  private _Messages: ChatDto[] = [];
  private _Message: string = "";
  private _Id: string = "";

  get Messages(): ChatDto[] {
    return this._Messages;
  }

  get Message() {
    return this._Message;
  }

  get Id() {
    return this._Id;
  }

  constructor(
    private chatWebsocketService: ChatWebsocketService
  ) {
    this._Id = this.chatWebsocketService.GetId();

  }

  ngOnInit(): void {
    this.chatWebsocketService.Messages$.subscribe((messages) => {
      this._Messages = messages;
    });

  }

  SendMessage(message: string) {
    this._Message = message;
    if (message !== "")
      this.chatWebsocketService.SendMessage(message);
    //chats.scrollTop = chats.scrollTopMax 
  }

}
