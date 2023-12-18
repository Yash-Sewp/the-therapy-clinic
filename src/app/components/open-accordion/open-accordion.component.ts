import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-open-accordion',
  templateUrl: './open-accordion.component.html',
  styleUrls: ['./open-accordion.component.scss']
})
export class OpenAccordionComponent {
  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
