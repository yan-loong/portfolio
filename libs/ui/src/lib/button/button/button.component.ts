import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input()
  color: 'primary' | 'accent' | 'warn' | "" = ""

  @Input()
  disabled?: boolean

  @Input()
  type: 'button' | 'submit' | 'reset' = 'button'

  constructor() { }

  ngOnInit(): void {
  }

}
