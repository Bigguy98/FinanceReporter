import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() parentItem: any = 'Languages';
  @Input() childItems: any[]=  ['AngularJS', 'Java', 'Python'];

  isCollapsed= true;

  constructor() { }

  ngOnInit(): void {
  }

}
