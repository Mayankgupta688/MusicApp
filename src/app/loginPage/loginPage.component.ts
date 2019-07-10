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

    authenticateUser() {
        alert("User Authenticated");
    }
}