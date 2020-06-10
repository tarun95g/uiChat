import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Members, Messages, MemberHash, ChatList } from '../pojo/chat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly messageEndPoint: string = '../../assets/json/messages.json';
  private readonly membersEndPoint: string = '../../assets/json/members.json';
  constructor(private http: HttpClient) { }

  //mock messages from assets
  getMessages() {
    return this.http.get(this.messageEndPoint);
  }

  //mock members from assets
  getMembers() {
    return this.http.get(this.membersEndPoint);
  }

  //transform into desired chat format with members hashMap 
  transformChatArray(messageList: Messages[], membersList: Members[]):ChatList[] {
    const usershash = this.createMembersHashMap(membersList);
    return messageList.map((value: Messages) => {
      const user = usershash[value.userId];
      return { ...value, ...user }
    }).sort(this.sortBy);
  }

  //sortby timestamp
  sortBy=(a,b)=>(a['timestamp'] > b['timestamp']?1:-1);

  //createhash map for members for easy transformation
  createMembersHashMap(members: Members[]) {
    return members.reduce((map, obj: Members) => ({ ...map, [obj.id]: new MemberHash(obj) }), {});
  }

}
