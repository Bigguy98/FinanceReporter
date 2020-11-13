import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PET';

  opened: boolean = false;

  frameworks = {
    "parent": "Frameworks",
    "childs": [
      "Spring MVC", "Spring JPA", "Spring Security", "AngularJS"
    ]
  }

  constructor(private navbarService: NavbarService) {
    
  }


  toogle(): void {
    this.opened = !this.opened;
    this.navbarService.toggleStatusNavbar(this.opened);
  }
}
