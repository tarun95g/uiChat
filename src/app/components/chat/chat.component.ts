import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { forkJoin } from 'rxjs';
import { ChatList } from 'src/app/pojo/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatList:ChatList[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    forkJoin([this.apiService.getMessages(), this.apiService.getMembers()]).subscribe((result: any) => {
      const [messages, members] = result;
      this.chatList = this.apiService.transformChatArray(messages, members);
    }, (error: any) => {
      console.log('Error fetching resources');
    })
  }

}
