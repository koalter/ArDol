import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ArDol';
  version = '1.5.1';

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.setWindowSize(window.innerWidth, window.innerHeight);
  }

  onResize(event) {
    this.appService.setWindowSize(event.target.innerWidth, event.target.innerHeight);
  }
}
