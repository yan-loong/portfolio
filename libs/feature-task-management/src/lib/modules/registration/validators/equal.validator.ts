import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function equalValidator(firstControlName: string, secondControlName: string): ValidatorFn {
    return (_parent: AbstractControl) => {
        const _fc = _parent.get(firstControlName);
        const _lc = _parent.get(secondControlName);

        const isEqual: boolean = !!(_fc && _lc && _fc.value === _lc.value)

        if (isEqual) {
            _lc?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return null;
        }
        else {
            const error: ValidationErrors = { notEqual: true }
            _lc?.setErrors(error)
            return error
        }
    }
}