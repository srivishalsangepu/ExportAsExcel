import { Component } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   data = [
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"300", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"200", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"500", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
    { "year":"2007", "month":"1", "make":"Volkswagen ", "model":"Volkswagen Passat", "quantity":"1267", "pct":"10"},
  ];
  constructor(private excelService: ExcelService) {

  }

  generateExcel(data) {
    this.excelService.generateExcel(data);
  }

}
