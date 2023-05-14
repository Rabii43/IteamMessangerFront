import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KitchenSinkAppComponent } from "./App-Components/kitchen-sink-app/kitchen-sink-app.component";
import { FormsModule } from "@angular/forms";
import { HomePageComponent } from "./App-Components/home-page/home-page.component";
import { UserListPageComponent } from "./App-Components/user-list-page/user-list-page.component";
import { CometChatConversationListPageComponent } from "./App-Components/Pages/comet-chat-conversation-list-page/comet-chat-conversation-list-page.component";
import { UserListScreenPageComponent } from "./App-Components/user-list-screen-page/user-list-screen-page.component";
import { CometChatMessageComposerPageComponent } from "./App-Components/Pages/comet-chat-message-composer-page/comet-chat-message-composer-page.component";
import { CometChatGroupListScreenPageComponent } from "./App-Components/Pages/comet-chat-group-list-screen-page/comet-chat-group-list-screen-page.component";
import { CometChatConversationListScreenPageComponent } from "./App-Components/Pages/comet-chat-conversation-list-screen-page/comet-chat-conversation-list-screen-page.component";
import { GroupListComponent } from "./App-Components/Pages/group-list/group-list.component";
import { GroupListScreenPageComponent } from "./App-Components/Pages/group-list-screen-page/group-list-screen-page.component";
import { CometChatUnifiedPageComponent } from "./App-Components/Pages/comet-chat-unified-page/comet-chat-unified-page.component";
import { RegisterComponent } from "./App-components/register/register.component";
import { CometChatAvatar, CometChatConversationList, CometChatConversationListWithMessages, CometChatGroupList, CometChatGroupListWithMessages, CometChatUI, CometChatUserList, CometChatUserListWithMessages } from "./public-api";



//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkAppComponent,
    HomePageComponent,
    UserListPageComponent,
    CometChatConversationListPageComponent,
    UserListScreenPageComponent,
    CometChatMessageComposerPageComponent,
    CometChatGroupListScreenPageComponent,
    CometChatConversationListScreenPageComponent,
    GroupListComponent,
    GroupListScreenPageComponent,
    CometChatUnifiedPageComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CometChatUI,
    CometChatConversationListWithMessages,
    CometChatGroupListWithMessages,
    CometChatUserListWithMessages,
    CometChatConversationList,
    CometChatGroupList,
    CometChatUserList,
    CometChatAvatar
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
