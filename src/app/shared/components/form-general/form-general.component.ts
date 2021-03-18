import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-general',
  templateUrl: './form-general.component.html',
  styles: [
  ]
})
export class FormGeneralComponent implements OnInit {

  @Input() tab1: any;
  @Input() tab2: any;
  @Input() tab3: any;

  constructor() { }

  ngOnInit(): void {
  }

}
