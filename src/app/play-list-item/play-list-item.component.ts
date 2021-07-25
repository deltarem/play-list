import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListItem } from '../core/modules/play-list-item';

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayListItemComponent implements OnInit {
  @Input() playListItem: PlayListItem;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigateDetails(detailUrl: string) {
    window.location.href = detailUrl;
  }
}
