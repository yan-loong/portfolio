import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-task-management-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
