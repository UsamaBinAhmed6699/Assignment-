import { Component, OnInit } from '@angular/core';
import{ChatService, Message} from '../chat.service'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
// chatMessages: ChatService = new ChatService();
AllMessage: Message[]=[];
  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    
    this.AllMessage = this.ChatService.getMessages();
    
  }

}
