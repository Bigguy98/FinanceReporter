import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isCollapse = true;

  constructor(private toogleService: NavbarService) { }

  ngOnInit() {
    this.toogleService.currentToggleStatus.subscribe(value => {
      console.log(value);
      this.isCollapse = value;
    })
  }

}
