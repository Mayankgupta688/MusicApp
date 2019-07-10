import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';

@Component({
    selector: 'app-songlist',
    templateUrl: './songList.component.html'
})

export class SongListComponent implements OnInit {
    addToPlayListArray: any = [];
    filter: String;
    filteredSongList: any;

    songListArray: any = [{
      "name": "Bekhayali",
      "duration": "1.33 mins",
      "artist": "Sachet Tandon",
      "avatar": "https://smedia2.intoday.in/btmt/images/stories/kabir_singh_poster2_660_062119041041.jpg"
    }, {
      "name": "Kaise Hua",
      "duration": "1.33 mins",
      "artist": "Vishal Mishra",
      "avatar": "https://www.bollynook.com/uploaded_pictures/content/lyrics/520x333/kaise-hua-22138.jpg"
    }, {
      "name": "Tujhe Kitna Chahne Lage",
      "duration": "1.33 mins",
      "artist": "Arijit Singh, Mithoon",
      "avatar": "https://www.pagalworld.live/GpE34Kg9Gq/14697/142750-tujhe-kitna-chahne-lage-kabir-singh-mp3-song-300.jpg"
    }, {
      "name": "Yeh Aaina",
      "duration": "1.33 mins",
      "artist": "Shreya Ghoshal",
      "avatar": "https://www.hinditracks.in/wp-content/uploads/2019/06/Yeh-Aaina-Lyrics.jpg"
    }, {
      "name": "Tujhe Kitna Chahein Aur",
      "duration": "1.33 mins",
      "artist": "Jubin Nautiyal",
      "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
    }];

    constructor(public _apiCallService: ApiCallService) {
      this.filteredSongList = this.songListArray;
    }

    ngOnInit() {
      this.addToPlayListArray = this._apiCallService.playListArray;
      this._apiCallService.onFilterUpdate.subscribe((data) => {
        this.filteredSongList = this.songListArray.filter(song => song.name.indexOf(data) > -1);
      })
    }

    addToPlayListFunc(addName) {
      var selectedSong = this.songListArray.filter(x => x.name == addName);
      console.log(selectedSong);
      this._apiCallService.playListArray.push(selectedSong[0]);
      console.log(this._apiCallService.playListArray);
    }

}