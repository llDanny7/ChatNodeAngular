import { ChatService } from './service/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormchatComponent } from './component/formchat/formchat.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ListMessageComponent } from './component/list-message/list-message.component'

@NgModule({
  declarations: [
    AppComponent,
    FormchatComponent,
    ListMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
