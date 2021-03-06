import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@portfolio/common';
import { UserInfoStore, UserService } from '@portfolio/data-access';
import { finalize } from 'rxjs';
import { LoggerService } from '../../../services/logger.service';
import { BaseForm } from '../../shared/form/base-form';

@Component({
  selector: 'feature-task-management-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent extends BaseForm implements OnInit {
  @ViewChild(FormGroupDirective)
  formGroup!: FormGroupDirective

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loggerService: LoggerService
  ) {
    super();
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.isValid && !this.isLoading) {
      this.loading.next(true);

      this.userService.login(this.value)
        .pipe(
          finalize(() => this.loading.next(false))
        )
        .subscribe(
          {
            next: (res) => {
              this.loggerService.logSuccess("USER_LOGIN_SUCCESSFULLY")
            },
            error: (error) => {
              this.loggerService.logError("USER_LOGIN_UNSUCCESSFULLY")
            }
          }
        )
    }
  }



}
