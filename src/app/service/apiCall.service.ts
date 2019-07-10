import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  onFilterUpdate = new EventEmitter<string>();
  albumDataRecieved = new EventEmitter<string>();
  playlistDataRecieved = new EventEmitter<string>();
  userAuthenticated = new EventEmitter<string>();

  albumListDetails: any = [];
  playListArray: any = [];
  userAuthenticationData = {};

  constructor(private http: HttpClient) { }

  getAlbumData() {

    if(this.albumListDetails.length > 0) {
      this.albumDataRecieved.emit("Data Recieved");
    } else {
      this.http.get("https://pvrfeqd9n1.execute-api.ap-south-1.amazonaws.com/dev/album").subscribe((data) => {
        this.albumListDetails = data;
        this.albumDataRecieved.emit("Data Recieved");
      });

      this.http.get("https://n7rwmo0yg3.execute-api.ap-south-1.amazonaws.com/dev/playlist").subscribe((data) => {
        this.playListArray = data;
        this.playlistDataRecieved.emit("data Recieved");
      });
    }
  }

  authenticateUser() {
    this.http.post("http://5a530e1477e1d20012fa066a.mockapi.io/login", {}).subscribe((data) => {
      this.userAuthenticationData = data;
      this.userAuthenticated.emit("Authentication Done")
    });
  }

  logoutUser() {
    this.userAuthenticated.emit("Logout Successful")
  }

  deleteSongFromPlaylist(removeName) {
    var index = this.playListArray.findIndex(song => song.name === removeName);
    this.playListArray.splice(index, 1);
    this.playlistDataRecieved.emit("Playlist Updated");
  }

  addSongToPlaylist(albumName, songName) {

  }
}