import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-payment-statistic',
  templateUrl: './payment-statistic.component.html',
  styleUrls: ['./payment-statistic.component.scss']
})
export class PaymentStatisticComponent implements OnInit {

  entities: any;

  constructor() { }

  ngOnInit() {
  }

  onFileChange(ev: any) {
    let workBook = null;
    let jsonData : any = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.entities =  jsonData.Sheet1;
      console.log(JSON.stringify(jsonData));
      console.log(JSON.stringify(jsonData.Sheet1));
    }
    reader.readAsBinaryString(file);
  }
}
