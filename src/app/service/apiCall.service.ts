import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  onFilterUpdate = new EventEmitter<string>();

  constructor() { }

  playListArray: any = [{
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg",
  }, {
    "name": "Super 30",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Article-15-Hindi-2019-20190614164612-150x150.jpg"
  }, {
    "name": "Bharat",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Bharat-Hindi-2019-20190517100839-150x150.jpg"
  }, {
    "name": "Naina",
    "duration": "1.33 mins",
    "artist": "Gourov-Roshin",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dheeme-Dheeme-Hindi-2019-20190521143140-150x150.jpg"
  }, {
    "name": "Udhal Ho (From)",
    "duration": "1.33 mins",
    "artist": "Dummy Artist",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Dil-Aziz-Hindi-2019-20190426075752-150x150.jpg"
  }, {
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
  }, {
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
  }, {
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
  }, {
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
  }, {
    "name": "Kabir Khan",
    "duration": "1.33 mins",
    "artist": "Various Artists",
    "avatar": "https://application-data-store.s3.ap-south-1.amazonaws.com/MusicAppImages/Aila-Re-From-Malaal--Hindi-2019-20190528231527-150x150.jpg"
  }];
}