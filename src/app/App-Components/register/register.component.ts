import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from 'src/CONSTS';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fd:FormData;
  username: any = "";
  email: any = "";
  password: any = "";
  photo: any = "";
  name: any = "";



  constructor(public router: Router) {}

  onLoginError: boolean = false;
  errorMsg: string = "";

  ngOnInit() {
  }

  /**
   * Get User info by using the UID for logging a user in
   * @param {String} UID
   */
  onRegister(UID) {

      console.log("uploaded");
      let  user = new CometChat.User('testing');
      user.setName(this.name);
      user.setUid(this.username);
      user.setAvatar("https://easyupload.io/ixae0u");
      user.setRole('default');
      CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
     user => {
         console.log("user created", user);
         this.router.navigate(["/login"]);
      },error => {
        console.log("error", error);
       })
  }


}
