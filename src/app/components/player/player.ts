import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

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
  reproductor = new Audio();
  @Input() index: any;
  @Input() FLAG; // = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
     this.FLAG = true;
  }

  // tslint:disable-next-line:typedef
  renderComponent() {
    // this.FLAG = false;
    // this.changeDetectorRef.detectChanges();
    // this.FLAG = true;
  }

  ngOnInit(): void {
  }

  playSong(audio): void {
    this.reproductor.src = audio.previewUrl;
    this.reproductor.play();
  }
  stopSong(audio): void {
    this.reproductor.pause();
  }
  pauseSong(audio): void {
    this.reproductor.pause();
  }
}
