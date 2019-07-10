import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './userPlayList.component.html',
})
export class UserPlayListComponent implements OnInit {
  
  playList: any = [];
  
  constructor(public _apiCallService: ApiCallService) { }

  ngOnInit() {
    this.playList = this._apiCallService.playListArray;

    // this._apiCallService.onFilterUpdate.subscribe((data) => {
      
    //   alert(data)
    // })
  }     

    removeFromPlayList(removeName) {
      var index = this.playList.findIndex(x => x.name === removeName);
      this.playList.splice(index, 1);
      
    }
}