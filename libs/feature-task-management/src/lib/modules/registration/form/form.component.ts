import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@portfolio/common';
import { RegistrationService } from '@portfolio/data-access';
import { BehaviorSubject, catchError, delay, finalize, of, Subject } from 'rxjs';
import { LoggerService } from '../../../services/logger.service';
import { BaseForm } from '../../shared/form/base-form';
import { equalValidator } from '../validators/equal.validator';

@Component({
  selector: 'feature-task-management-registration-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent extends BaseForm implements OnInit {

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    private loggerService: LoggerService,
  ) {
    super();

    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: equalValidator('password', 'confirmPassword') }
    )

  }

  ngOnInit(): void {


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
              this.loggerService.logSuccess("REGISTRATION_FINISHED_SUCCESSFULLY")
            },
            error: (error) => {
              this.loggerService.logError("REGISTRATION_FINISHED_UNSUCCESSFULLY")
            }
          }
        )
    }
  }



}
