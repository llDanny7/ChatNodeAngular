import { ChatService } from './../../service/chat.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'formchat',
    templateUrl: './formchat.component.html',
    styleUrls: ['./formchat.component.css']
})
export class FormchatComponent implements OnInit {

    
    formChat: FormGroup
    constructor(private formBuilder: FormBuilder,private chatService: ChatService) { }

    ngOnInit() {
        this.formChat = this.formBuilder.group({
            nameUser:['', Validators.required],
            message: ['', Validators.required]
        })
    }

    sendMessage() {        
        if (this.formChat.invalid)
            return;            
        this.chatService.sendMessage(this.formChat.value)
    }
}
