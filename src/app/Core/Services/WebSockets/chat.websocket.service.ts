import { ChatDto } from '@Core/Microservices/Models/Chat/chat.dto';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatWebsocketService {

  private _Messages: BehaviorSubject<ChatDto[]> = new BehaviorSubject<ChatDto[]>([]);
  public Messages$ = this._Messages.asObservable();
  private _Id :string = "";

  constructor(private socket: Socket) {
    this._Id = this.GenerateId();
    socket.on('connect', () => {
      console.log('connected');
    });


    this.socket.fromEvent("messages").subscribe((messages)=>{
      if(messages)
        this._Messages.next(messages as ChatDto[]);
    });

  }
  
  private GenerateId(){
      return Math.random().toString(36).substring(2, 8);
  }

  SendMessage(msg: string) {
    this.socket.emit('message', {
      ...new ChatDto(),
      coduser: this._Id,
      message: msg
    } as ChatDto);  
  }  

  GetId(){
    return this._Id;
  }


}
