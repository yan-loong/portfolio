import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@portfolio/common';
import { RegistrationService } from '@portfolio/data-access';
import { BehaviorSubject, catchError, delay, finalize, of, Subject } from 'rxjs';
import { LoggerService } from '../../../services/logger.service';
import { RoutingService } from '../../../services/routing.service';
import { BaseForm } from '../../shared/form/base-form';
import { equalValidator } from '../validators/equal.validator';

@Component({
  selector: 'feature-task-management-registration-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent extends BaseForm implements OnInit {
  @ViewChild(FormGroupDirective)
  formGroup!: FormGroupDirective

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    private loggerService: LoggerService,
    private routingService: RoutingService
  ) {
    super();

    this.form = this.fb.group(
      {
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]]
      },
      { validators: equalValidator('password', 'confirmPassword') }
    )

  }

  ngOnInit(): void {
    console.log(this.form.get('email')?.hasError('required'))
    console.log(this.form)
  }

  submit() {
    if (this.isValid && !this.isLoading) {
      this.loading.next(true);

      this.registrationService.registration(this.value)
        .pipe(
          finalize(() => this.loading.next(false))
        )
        .subscribe(
          {
            next: (res) => {
              this.routingService.navigateToAbsolute('/login')
              this.loggerService.logSuccess("REGISTRATION_FINISHED_SUCCESSFULLY");
            },
            error: (error) => {
              this.handleError();
            }
          }
        )
    }
  }


  protected override handleError() {
    super.handleError();
    this.loggerService.logError("REGISTRATION_FINISHED_UNSUCCESSFULLY");
  }

}
