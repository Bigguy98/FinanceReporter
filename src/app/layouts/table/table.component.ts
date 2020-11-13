import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service: CommonService) { }

  entities : any[];
  ngOnInit() {
    this.getData()
  }
  getData() {
    this.service.getEntity("/animal").subscribe((response: any) => {
      this.entities = response;
    })
  }

}
