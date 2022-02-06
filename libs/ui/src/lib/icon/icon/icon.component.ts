import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  private _iconName!: string;

  @Input()
  set iconName(value: string) {
    this._iconName = value;
  }

  get iconName(): string {
    return this._iconName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
