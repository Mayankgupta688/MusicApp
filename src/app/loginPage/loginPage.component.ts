import {Component, Input, OnInit} from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login-page',
    templateUrl: './loginPage.component.html'
})
export class LoginComponent {

    userName: string = "Mayank";
    userPassword: string = "Alloc@te";
    authenticationDetails = {};

    constructor(public _apiCallService: ApiCallService) { 
        this._apiCallService.userAuthenticated.subscribe((data) => {
            this.authenticationDetails = this._apiCallService.userAuthenticationData;
            if(!this.authenticationDetails['access_token']) {
                this.userName = "";
                this.userPassword = "";
                alert("Wrong User Name or Password");
            }
        });
    }

    authenticateUser() {
        this._apiCallService.authenticateUser();
    }
}