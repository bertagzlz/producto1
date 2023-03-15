import { Component, OnInit } from '@angular/core';

import { Songs } from '../models/Songs.model';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.html',
  styleUrls: ['./music-list.scss']
})
export class MusicListComponent implements OnInit{
  objSongs = new Songs('mis songs');
  songs = this.objSongs.getSongs();
  // no usado, era para el json
  // songs: any = (data as any).default;
  currentSong: Song = {};
  currentIndex = -1;
  flag = false;
  constructor() { }
  ngOnInit(): void {}
  setActiveSong(song: Song, index: number): void {
    // this.flag = !this.flag;
    if (this.currentIndex === index) { this.flag = true; }
     else {
      this.currentSong = song;
      this.currentIndex = index;
      this.flag = false;
      setTimeout (() => {
       this.upDate();
      }, 1000);
      } // !this.flag; }
  }
  upDate(): void {
    this.flag = true;
  }

}
