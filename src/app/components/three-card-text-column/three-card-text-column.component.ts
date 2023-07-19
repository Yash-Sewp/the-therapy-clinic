import { Component, Input } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-three-card-text-column',
  templateUrl: './three-card-text-column.component.html',
  styleUrls: ['./three-card-text-column.component.scss']
})

export class ThreeCardTextColumnComponent {
  @Input() data: any = [];
  @Input() title: string = ' ';
  
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
