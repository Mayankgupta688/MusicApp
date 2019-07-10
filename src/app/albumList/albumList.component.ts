import {Component, Input, OnInit} from '@angular/core';
import { ApiCallService } from '../service/apiCall.service';

@Component({
    selector: 'app-albumlist',
    templateUrl: './albumList.component.html'
})
export class AlbumListComponent implements OnInit {
    @Input() name: string;

    filteredAlbumList: [];

    constructor(public _apiCallService: ApiCallService) {
      this.filteredAlbumList = this.musicAlbumList;
    }

    ngOnInit() {
      this._apiCallService.onFilterUpdate.subscribe((data) => {
        this.filteredAlbumList = this.musicAlbumList.filter(song => song.name.indexOf(data) > -1);
      })
    }

    musicAlbumList: any = [{
        "name": "Kabir Khan",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Kabir Khan",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      },
      {
        "name": "Article 15",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Bharat",
        "duration": "1.33 mins",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Bharat-Hindi-2019-20190517100839-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Naina",
        "duration": "1.33 mins",
        "artist": "Gourov-Roshin",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dheeme-Dheeme-Hindi-2019-20190521143140-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Udhal Ho (From)",
        "duration": "1.33 mins",
        "artist": "Dummy Artist",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dil-Aziz-Hindi-2019-20190426075752-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      },{
        "name": "Kabir Khan",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Super 30",
        "duration": "1.33 mins",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      },{
        "name": "Udhal Ho (From)",
        "duration": "1.33 mins",
        "artist": "Dummy Artist",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dil-Aziz-Hindi-2019-20190426075752-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      },{
        "name": "Kabir Khan",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Bharat",
        "duration": "1.33 mins",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Bharat-Hindi-2019-20190517100839-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Naina",
        "duration": "1.33 mins",
        "artist": "Gourov-Roshin",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dheeme-Dheeme-Hindi-2019-20190521143140-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }, {
        "name": "Udhal Ho (From)",
        "duration": "1.33 mins",
        "artist": "Dummy Artist",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dil-Aziz-Hindi-2019-20190426075752-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      },{
        "name": "Kabir Khan",
        "artist": "Various Artists",
        "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        "songList": [{
          "name": "Kabir Khan",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
        }, {
          "name": "Super 30",
          "duration": "1.33 mins",
          "artist": "Various Artists",
          "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
        }]
      }
    ];
}