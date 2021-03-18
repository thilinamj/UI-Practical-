import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styles: [
  ]
})
export class MainSidebarComponent implements OnInit {

  nav: any;

  constructor() { }

  ngOnInit(): void {
    this.initNavs();
  }

  public onSelectNav(nav: string) {
    // TODO
  }

  // private functions

  private initNavs() {
    this.nav = {};
  }

}
