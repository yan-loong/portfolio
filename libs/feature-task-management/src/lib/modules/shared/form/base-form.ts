import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export abstract class BaseForm {
    loading = new BehaviorSubject<boolean>(false);
    form!: FormGroup;

    abstract submit(): void;

    get isValid(): boolean {
        return this.form.valid
    }

    get value() {
        return this.form.value;
    }

    get isLoading(): boolean {
        return this.loading.value
    }

    constructor() { }
}