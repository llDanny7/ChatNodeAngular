import { ChatService } from './../../service/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-message',
    templateUrl: './list-message.component.html',
    styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

    allMessage: any[] = [];
    constructor(private chatService: ChatService) { }

    ngOnInit() {

        this.chatService.getMessage().subscribe((message) => {
            this.allMessage.push(message);
        })
    }
}
