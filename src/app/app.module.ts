import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './homepage/app.component';
import { AlbumListComponent } from './albumList/albumList.component';
import { SongListComponent } from './songList/songList.component';
import { UserPlayListComponent } from './userPlayList/userPlayList.component';
import { ApiCallService } from "./service/apiCall.service";
import { FormsModule } from "@angular/forms";
const routes = [
  { path: '', component: AlbumListComponent },
  { path:'songList/:id', component: SongListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    UserPlayListComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
