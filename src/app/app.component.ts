import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-therapy-clinic';
  
  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}
