import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private socket = io('http://localhost:8080')
    constructor() { }

    public sendMessage(message){
        console.log(message)
        this.socket.emit('newMessage', message);
    }

    public getMessage(){
        return Observable.create( observer => {
            this.socket.on('newMessage', message => {
                console.log("LLEGA MENSAJE")
                observer.next(message);
            })
        })
    }
}
