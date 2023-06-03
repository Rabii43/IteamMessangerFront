import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CometChat} from '@cometchat-pro/chat';
//import { ToastrService } from "ngx-toastr";
import {COMETCHAT_CONSTANTS} from 'src/CONSTS';

@Component({
  selector: 'app-kitchen-sink-app',
  templateUrl: './kitchen-sink-app.component.html',
  styleUrls: ['./kitchen-sink-app.component.scss'],
})
export class KitchenSinkAppComponent implements OnInit {
  userInput: any = '';
  onLoginError: boolean = false;
  errorMsg: string = '';

  constructor(
    public router: Router,
  ) {
  }

  ngOnInit() {

  }

  /**
   * Get User info by using the UID for logging a user in
   * @param {String} UID
   */
  onLogin(UID) {
    CometChat.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {
        console.log('Login Successful:', {user});
        if (user.getDeactivatedAt() === 1) {
          alert('Utilisateur désactivé par l\'administrateur');
          return;
        }
        alert('Utilisateur connecté avec succès');
        if (user.getRole() === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/Accueil']);
        }
      },
      (error) => {
        // this.toastr.error("Erreur lors de la connexion de l'utilisateur","Verifiez votre identifiant");
        this.onLoginError = true;
        this.errorMsg = error.message;
      }
    );
  }
}
