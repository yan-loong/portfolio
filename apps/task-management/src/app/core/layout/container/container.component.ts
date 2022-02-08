import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@portfolio/feature-task-management';
import { distinctUntilChanged, Observable } from 'rxjs';

@Component({
  selector: 'task-management-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isLoadingVisible$: Observable<boolean>;

  constructor(
    private LoadingService: LoadingService
  ) {
    this.isLoadingVisible$ = this.LoadingService.isVisible$
      .pipe(
        distinctUntilChanged()
      )
  }

  ngOnInit(): void {
  }

}
