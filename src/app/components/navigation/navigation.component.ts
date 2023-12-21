import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  closeNav() {
    var nav = document.getElementById('navbarText');
    
    if (nav) {
      nav.classList.remove('show');
    }
  }
}
