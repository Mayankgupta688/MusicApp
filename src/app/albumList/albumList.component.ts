import {Component, Input, OnInit} from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-albumlist',
    templateUrl: './albumList.component.html'
})
export class AlbumListComponent implements OnInit {
    @Input() name: string;

    filteredAlbumList: [];

    musicAlbumList: any = [];

    constructor(public _apiCallService: ApiCallService, private http: HttpClient) {
      this.filteredAlbumList = this.musicAlbumList;
    }

    ngOnInit() {
      this._apiCallService.albumDataRecieved.subscribe((data) =>{
        this.musicAlbumList = this._apiCallService.albumListDetails;
        this.filteredAlbumList = this.musicAlbumList;
      });

      this._apiCallService.onFilterUpdate.subscribe((data) => {
        this.filteredAlbumList = this.musicAlbumList.filter(song => song.name.indexOf(data) > -1);
      });

      this._apiCallService.getAlbumData();
    }

}