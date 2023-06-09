import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatUserProfileComponent } from "./cometchat-user-profile/cometchat-user-profile.component";
import { CometChatAvatar } from "../../Shared/CometChat-avatar/cometchat-avatar.module";
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CometChatUserProfileComponent],
    imports: [CommonModule, CometChatAvatar, RouterModule],
  exports: [CometChatUserProfileComponent],
})
export class CometChatUserProfile {}
