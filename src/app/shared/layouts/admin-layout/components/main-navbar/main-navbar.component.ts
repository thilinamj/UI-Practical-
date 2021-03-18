import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonUtils } from 'src/app/shared/utils/common-utils';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styles: [
  ]
})
export class MainNavbarComponent implements OnInit {

  cUser: any;
  alerts: Array<any>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // sample user
    this.cUser = {
      firstName: 'Admin',
      designation: {
        name: 'Admin'
      }
    }
    // sample alerts
    this.alerts = [];
  }

  public logout() {
    CommonUtils.redirectTo(this.router, '/login');
  }

}
