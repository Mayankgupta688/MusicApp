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
    this._apiCallService.playlistDataRecieved.subscribe((data) => {
      this.playList = this._apiCallService.playListArray;
    });

    this._apiCallService.getUserPlayList();
  }     

  removeFromPlayList(removeName) {
    this._apiCallService.deleteSongFromPlaylist(removeName)
  }
}