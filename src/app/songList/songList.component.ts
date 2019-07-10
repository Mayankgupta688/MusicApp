import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-songlist',
    templateUrl: './songList.component.html'
})

export class SongListComponent implements OnInit {
    addToPlayListArray: any = [];
    filter: String;
    filteredSongList: any;
    selectedAlbumId = "";

    songListArray: any = [];

    constructor(public _apiCallService: ApiCallService, private route: ActivatedRoute) {
      debugger;
      this.selectedAlbumId = this.route.snapshot.paramMap.get("id");
    }

    ngOnInit() {

      debugger;

      this.addToPlayListArray = this._apiCallService.playListArray;

      this._apiCallService.albumDataRecieved.subscribe((data) =>{
        this.songListArray = this._apiCallService.albumListDetails.filter(album => album.id == this.selectedAlbumId)[0].songs;
        this.filteredSongList = this.songListArray;
      });

      this._apiCallService.onFilterUpdate.subscribe((data) => {
        this.filteredSongList = this.songListArray.filter(song => song.name.indexOf(data) > -1);
      });

      this._apiCallService.getAlbumData();

    }

    addToPlayListFunc(addName) {
      var selectedSong = this.songListArray.filter(x => x.name == addName);
      console.log(selectedSong);
      this._apiCallService.playListArray.push(selectedSong[0]);
      console.log(this._apiCallService.playListArray);
    }

}