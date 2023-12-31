import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { FwChatPage } from './Pages/fw-chat/fw-chat.page';
import { FwChatContactsComponent } from './Pages/fw-chat/Components/fw-chat-contacts/fw-chat-contacts.component';
import { FwChatFormComponent } from './Pages/fw-chat/Components/fw-chat-form/fw-chat-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FwChatMessageComponent } from './Pages/fw-chat/Components/fw-chat-message/fw-chat-message.component';


@NgModule({
  declarations: [
    FwChatPage,
    FwChatContactsComponent,
    FwChatFormComponent,
    FwChatMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
