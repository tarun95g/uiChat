import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatItemComponent } from './components/chat/chat-item/chat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
