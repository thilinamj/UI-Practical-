import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styles: [
  ]
})
export class ViewAccountsComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() branch: string;
  @Input() accountNumber: number;
  @Input() hasAccount: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
