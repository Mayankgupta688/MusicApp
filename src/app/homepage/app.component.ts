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
  isAuthenticated = true;

  constructor(public _apiCallService: ApiCallService) { 
    
  }

  updateFilterValue() {
    this._apiCallService.onFilterUpdate.emit(this.searchText);
  }
}
