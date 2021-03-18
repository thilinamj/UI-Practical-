import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../../core';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styles: [
  ]
})
export class PageDashboardComponent implements OnInit {

  public loading: boolean;

  public vehicles: Array<any>;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();

    this.vehicles = [
      {
        id: 1,
        name: 'CAC-2019'
      }
    ];
  }

  // private functions

  private getEmployees() {
    this.employeeService.getEmployees().subscribe((res: any) => {
      console.log(res);
    },
    (err: any) => {
      this.loading=false;
    },
    () => {
      this.loading = false;
    }
    );
  }

}
