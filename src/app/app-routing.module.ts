import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './App-Components/home-page/home-page.component';
import {KitchenSinkAppComponent} from './App-Components/kitchen-sink-app/kitchen-sink-app.component';
import {
  CometChatConversationListPageComponent
} from './App-Components/Pages/comet-chat-conversation-list-page/comet-chat-conversation-list-page.component';
import {
  CometChatConversationListScreenPageComponent
} from './App-Components/Pages/comet-chat-conversation-list-screen-page/comet-chat-conversation-list-screen-page.component';
import {GroupListComponent} from './App-Components/Pages/group-list/group-list.component';
import {UserListPageComponent} from './App-Components/user-list-page/user-list-page.component';
import {UserListScreenPageComponent} from './App-Components/user-list-screen-page/user-list-screen-page.component';
import {GroupListScreenPageComponent} from './App-Components/Pages/group-list-screen-page/group-list-screen-page.component';
import {CometChatUnifiedPageComponent} from './App-Components/Pages/comet-chat-unified-page/comet-chat-unified-page.component';
import {RegisterComponent} from './App-components/register/register.component';
import {UserListAdminComponent} from './App-Components/userlist/userlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: KitchenSinkAppComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'contact-list',
    component: UserListPageComponent,
  },
  {
    path: 'conversations-list',
    component: CometChatConversationListPageComponent,
  },
  {
    path: 'userListScreen',
    component: UserListScreenPageComponent,
  },
  {
    path: 'userList',
    component: UserListAdminComponent,
  },
  {
    path: 'contact-screen',
    component: UserListScreenPageComponent,
  },
  {
    path: 'conversation-screen',
    component: CometChatConversationListScreenPageComponent,
  },
  {
    path: 'group-list',
    component: GroupListComponent,
  },
  {
    path: 'group-screen',
    component: GroupListScreenPageComponent,
  },
  {
    path: 'Accueil',
    component: CometChatUnifiedPageComponent,
  },  {
    path: 'admin',
    component: CometChatUnifiedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
