import { Component, OnInit, Input } from '@angular/core';
import { ChatList } from 'src/app/pojo/chat';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {


  @Input('chat') chat :ChatList;
  constructor() { }

  ngOnInit() {
  }

}
