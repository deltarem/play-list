import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayListItem } from '../core/modules/play-list-item';
import { PlayListService } from '../core/services/play-list.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  error: any;
  playList: PlayListItem[];
  playListSubscription: Subscription;

  constructor(private playListService: PlayListService) { }

  ngOnInit() {
    this.getFeaturedPlaylists();
  }


  getFeaturedPlaylists() {
    this.playListSubscription = this.playListService.getFeaturedPlaylists()
      .subscribe(
        (data) => {

          this.playList = data.featuredPlaylists.content;
          console.log('playList', this.playList);

        },
        error => this.error = error
      );
  }

  ngOnDestroy() {
    if (this.playListSubscription !== null) {
      this.playListSubscription.unsubscribe();
    }
  }
}
