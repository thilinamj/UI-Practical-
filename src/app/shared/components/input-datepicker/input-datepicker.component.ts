import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../abstract-input-component';

@Component({
  selector: 'app-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatepickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDatepickerComponent),
      multi: true,
    }
  ]
})
export class InputDatepickerComponent extends AbstractInputComponent implements OnInit {

  @Input() position: string;
  @Input() readonly: boolean;
  @Input() options: any;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.position = this.position ? this.position : 'bottom-right';
    let defaultOpts = {
      displayFormat: 'MMM D[,] YYYY'
    };
    this.options = { ...defaultOpts, ...this.options };
  }

}
