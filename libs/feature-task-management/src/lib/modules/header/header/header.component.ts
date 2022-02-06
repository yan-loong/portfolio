import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoutingService } from '../../../services/routing.service';

@Component({
  selector: 'feature-task-management-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  navigateTohome() {
    this.routingService.navigateToAbsolute(["/"])
  }

  logIn() {
    this.routingService.navigateToAbsolute(["login"])
  }

}
