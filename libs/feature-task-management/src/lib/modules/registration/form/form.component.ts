import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@portfolio/common';
import { RegistrationService } from '@portfolio/data-access';
import { catchError, delay, of } from 'rxjs';
import { LoggerService } from '../../../services/logger.service';
import { equalValidator } from '../validators/equal.validator';

@Component({
  selector: 'feature-task-management-registration-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    private loggerService: LoggerService,
    private translateService: TranslateService,
  ) {
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
    if (this.isValid) {
      this.registrationService.registration(this.value)
        .subscribe(
          {
            next: () => {
              const message: string = this.translateService.instant("REGISTRATION_FINISHED_SUCCESSFULLY")
              this.loggerService.logSuccess(message)
            },
            error: (error) => {
              const message: string = this.translateService.instant("REGISTRATION_FINISHED_UNSUCCESSFULLY")
              this.loggerService.logError(message)

            }
          }
        )
    }
  }

  get isValid(): boolean {
    return this.form.valid
  }

  get value(): User {
    const { value } = this.form;
    return value;
  }

}
