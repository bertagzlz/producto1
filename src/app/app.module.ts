import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicList } from './music-list/music-list';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SongDetail } from './components/song-detail/song-detail';
import {FormsModule} from '@angular/forms';
import { Player } from './components/player/player';

@NgModule({
  declarations: [
    AppComponent,
    MusicList,
    SongDetail,
    Player
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
