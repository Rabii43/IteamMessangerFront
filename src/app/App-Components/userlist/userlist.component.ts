import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CometChat} from '@cometchat-pro/chat';
import {COMETCHAT_CONSTANTS} from '../../../CONSTS';
import User = CometChat.User;
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { log } from 'util';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListAdminComponent implements OnInit {
  alertContent ='';
  toDeleteUser = null;
  alertSuccess = false;
  alertDanger = false;
  updateForm:FormGroup;
  updateFormShown:boolean = false;
  deleteFormShown:boolean = false;
  appId = COMETCHAT_CONSTANTS.APP_ID;
  region = COMETCHAT_CONSTANTS.REGION;
  apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
  url = `https://${this.appId}.api-${this.region}.cometchat.io/v3/users`;
  headers = new HttpHeaders().set('apiKey', this.apiKey)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
  users: any[] = [];
  allUsers = [];
  userIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrti76AM3ft8Qu8_drYFvf1Qqh_-I07XdlsnC4MvOmtA&s';

  constructor(private http: HttpClient, private formBuilder:FormBuilder) {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      uid:['', Validators.required],
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    this.headers.set('method', 'get');
    this.headers.set('withDeactivated','false');
    this.http.get<any>(this.url, {headers: this.headers,
    }).subscribe(
      (response: any) => {
        console.log('Users:', response);
        this.users = response.data;
      },
      (error) => {
        console.error('Error getting users:', error);
      }
    );
  }

  toDate(str) {
    return this.formatDate(new Date(str));
  }

  formatDate(date) {
    const year = String(parseInt(date.getFullYear()) + 53);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  updateUser(user: any,msgDanger="", msgSuccess="") {
    this.headers = new HttpHeaders().set('apiKey', this.apiKey)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    this.headers.set('method', 'put');
    this.updateFormShown = false;
    this.http.put<any>(this.url + '/' + user.uid,
      {
        body: {
          ...user
        },
        json: true
      }, {headers: this.headers}).subscribe(
      (response) => {
        this.showAlert(msgSuccess == ""?"User updated":msgSuccess, "Success")
        this.updateFormShown = false;
        this.getUsers();
      },
      (error) => {
        this.showAlert(msgDanger == ""?"Erreur when updating user":msgDanger, "Danger")
        this.updateFormShown = false;
      }
    );
  }
  delete(user:any){
    this.toDeleteUser = user;
    this.deleteFormShown = true;
  }
  deleteUser() {
    let userId = this.toDeleteUser.uid;
    this.headers = new HttpHeaders().set('apiKey', this.apiKey)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    this.headers.set('method', 'put');
    this.deleteFormShown = false;
    this.http.delete(this.url + '/' + userId,
       {headers:this.headers}).subscribe(
      (response) => {
        this.showAlert("User Deleted Succcessfully", "Success")
        this.updateFormShown = false;
        this.getUsers();
      },
      (error) => {
        this.showAlert("Error when deleted user", "Danger")
        this.updateFormShown = false;
      }
    );
  }
  update(user:any){
    this.updateForm.get('name').setValue(user.name);
    this.updateForm.get('avatar').setValue(user.avatar);
    this.updateForm.get('uid').setValue(user.uid);
    this.updateFormShown = true;
  }

 


  showAlert(str, type){
    if(type=="Success"){
      this.alertContent = str;
      this.alertSuccess = true
      setTimeout(() => this.alertSuccess = false, 3000)
    }else{
      this.alertContent = str;
      this.alertDanger = true
      setTimeout(() => this.alertDanger = false, 3000)
    }
  }
}
