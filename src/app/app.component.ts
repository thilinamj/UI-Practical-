import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title
  ) {
    this.setTitle(environment.configs.company.name);
  }

  public setTitle(pageTitle: string) {
    this.titleService.setTitle(pageTitle);
  }
}
