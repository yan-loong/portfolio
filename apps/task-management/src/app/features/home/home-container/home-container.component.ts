import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-management-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit(): void {
  }


}
