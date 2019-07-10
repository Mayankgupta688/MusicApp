import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'music-playlist';
  searchText = "";
  isAuthenticated = false;
  authenticationDetails = {};

  constructor(public _apiCallService: ApiCallService) { 
    this._apiCallService.userAuthenticated.subscribe((data) => {
      if(data == "Logout Successful") {
        this.isAuthenticated = false;
      } else if(data == "Authentication Done") {
        this.authenticationDetails = this._apiCallService.userAuthenticationData;
        if(this.authenticationDetails['access_token']) {
          this.isAuthenticated = true;
        }
      }
    });
  }

  logoutUser() {
    this._apiCallService.logoutUser();
  }

  updateFilterValue() {
    this._apiCallService.onFilterUpdate.emit(this.searchText);
  }
}
