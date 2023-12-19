import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  closeNav() {
    console.log('test');
    
    var nav = document.getElementById('navbarText');
    console.log(nav);
    
    if (nav) {
      nav.classList.remove('show');
    }
  }
}
