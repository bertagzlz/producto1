import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicListComponent } from './music-list/music-list';
import { HttpClientModule } from '@angular/common/http';
import { SongDetail } from './components/song-detail/song-detail';
import { Player } from './components/player/player';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    SongDetail,
    Player
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
