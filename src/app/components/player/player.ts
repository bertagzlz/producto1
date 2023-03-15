import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.html',
  styleUrls: ['./player.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Player implements OnInit {
  @Input() song;
  @Input() viewMode = true; // false;
  // tslint:disable-next-line:new-parens
  @Input() reproductor = new Audio();
  @Input() index: any;
  @Input() FLAG; // = false;
  @Input() player;

  constructor() {
    // private  } changeDetectorRef: ChangeDetectorRef) {
     this.FLAG = true;
     // this.player.autoplay = true;
  }

  // tslint:disable-next-line:typedef
  renderComponent() {
    // this.FLAG = false;
    // this.changeDetectorRef.detectChanges();
    // this.FLAG = true;
  }

  ngOnInit(): void {
  }

  /* playSong(song): void {
    // this.reproductor.src = song.previewUrl;
    // this.reproductor.play();
    this.player.src = song.previewUrl;
    this.player.play();
  }
  stopSong(song): void {
    // this.reproductor.pause();
    this.player.pause();
  }
  pauseSong(song): void {
    // this.reproductor.pause();
    this.player.pause();
  }
  */
}
