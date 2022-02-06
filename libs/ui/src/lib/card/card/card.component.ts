import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
