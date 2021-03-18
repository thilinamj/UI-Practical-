import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AbstractPageComponent } from './abstract-page-component';

export class AbstractFormComponent extends AbstractPageComponent {

    public form: FormGroup;
    public fb: FormBuilder;
    public formLoading: boolean;

    private debounceDelay: number = 500;

    constructor(
        protected injector: Injector
    ) {
        super();
        this.fb = injector.get(FormBuilder);
    }

    /**
     * Initialize form with controls
     * @param controlsConfig form controls
     */
    protected initForm(controlsConfig: { [key: string]: any }) {
        this.form = this.fb.group(controlsConfig);
    }

    /**
     * Subscribe form field
     * @param fieldName form field name
     */
    protected subscribeFormField(fieldName: string): Observable<any> {
        return this.form.get(fieldName).valueChanges.pipe(
            debounceTime(this.debounceDelay),
            distinctUntilChanged()
        );
    }

    /**
     * Set form field value
     * @param fieldName form field name
     * @param val form field value
     */
    protected setFormField(fieldName: string, val: any) {
        this.form.get(fieldName).setValue(val);
    }

    protected isAddMode(id: string) {
        return id === 'add';
    }

    protected getQueryParam(paramName: string) {
        return this.queryParams ? this.queryParams[paramName] : null;
    }
}
