import { Component, Input } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-text-image-column',
  templateUrl: './text-image-column.component.html',
  styleUrls: ['./text-image-column.component.scss']
})
export class TextImageColumnComponent {
  @Input() img: string = '';
  @Input() title: string = ' ';
  @Input() copy: string = '';
  @Input() reverse: boolean = false;

    
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
