import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styles: [
  ]
})
export class BtnActionComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() routerLink: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.title) this.title = 'Add New';
    if (!this.icon) this.icon = 'add';
  }

}
