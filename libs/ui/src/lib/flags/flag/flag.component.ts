import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ui-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent implements OnInit {
  private _countryName!: string;

  @Input()
  set countryName(value: string) {
    this._countryName = value;
  }

  get countryName(): string {
    return this._countryName;
  }

  constructor() { }

  ngOnInit(): void {
  }



  setUrl() { }

}
