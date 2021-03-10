import { Component, OnInit } from '@angular/core';
import { FinanceMethods } from 'actslib';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface FVIF {
  period: number;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  value6: number;
  value7: number;
  value8: number;
  value9: number;
  value10: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-finance-demo',
  templateUrl: './finance-demo.component.html',
  styleUrls: ['./finance-demo.component.scss']
})
export class FinanceDemoComponent implements OnInit {
  displayedColumns: string[] = [
    'period', 'value1', 'value2', 'value3', 'value4', 'value5',
    'value6', 'value7', 'value8', 'value9', 'value10',
  ];
  dataSource: FVIF[] = [];

  constructor() {
    // 1
    this.dataSource.push({
      period: 1,
      value1: FinanceMethods.FVIF(0.01, 1, 4),
      value2: FinanceMethods.FVIF(0.02, 1, 4),
      value3: FinanceMethods.FVIF(0.03, 1, 4),
      value4: FinanceMethods.FVIF(0.04, 1, 4),
      value5: FinanceMethods.FVIF(0.05, 1, 4),
      value6: FinanceMethods.FVIF(0.06, 1, 4),
      value7: FinanceMethods.FVIF(0.07, 1, 4),
      value8: FinanceMethods.FVIF(0.08, 1, 4),
      value9: FinanceMethods.FVIF(0.09, 1, 4),
      value10: FinanceMethods.FVIF(0.10, 1, 4),
    });
    // 2
    this.dataSource.push({
      period: 2,
      value1: FinanceMethods.FVIF(0.01, 2, 4),
      value2: FinanceMethods.FVIF(0.02, 2, 4),
      value3: FinanceMethods.FVIF(0.03, 2, 4),
      value4: FinanceMethods.FVIF(0.04, 2, 4),
      value5: FinanceMethods.FVIF(0.05, 2, 4),
      value6: FinanceMethods.FVIF(0.06, 2, 4),
      value7: FinanceMethods.FVIF(0.07, 2, 4),
      value8: FinanceMethods.FVIF(0.08, 2, 4),
      value9: FinanceMethods.FVIF(0.09, 2, 4),
      value10: FinanceMethods.FVIF(0.10, 2, 4),
    });
    // 3
    this.dataSource.push({
      period: 3,
      value1: FinanceMethods.FVIF(0.01, 3, 4),
      value2: FinanceMethods.FVIF(0.02, 3, 4),
      value3: FinanceMethods.FVIF(0.03, 3, 4),
      value4: FinanceMethods.FVIF(0.04, 3, 4),
      value5: FinanceMethods.FVIF(0.05, 3, 4),
      value6: FinanceMethods.FVIF(0.06, 3, 4),
      value7: FinanceMethods.FVIF(0.07, 3, 4),
      value8: FinanceMethods.FVIF(0.08, 3, 4),
      value9: FinanceMethods.FVIF(0.09, 3, 4),
      value10: FinanceMethods.FVIF(0.10, 3, 4),
    });
    // 4
    this.dataSource.push({
      period: 4,
      value1: FinanceMethods.FVIF(0.01, 4, 4),
      value2: FinanceMethods.FVIF(0.02, 4, 4),
      value3: FinanceMethods.FVIF(0.03, 4, 4),
      value4: FinanceMethods.FVIF(0.04, 4, 4),
      value5: FinanceMethods.FVIF(0.05, 4, 4),
      value6: FinanceMethods.FVIF(0.06, 4, 4),
      value7: FinanceMethods.FVIF(0.07, 4, 4),
      value8: FinanceMethods.FVIF(0.08, 4, 4),
      value9: FinanceMethods.FVIF(0.09, 4, 4),
      value10: FinanceMethods.FVIF(0.10, 4, 4),
    });
    // 5
    this.dataSource.push({
      period: 5,
      value1: FinanceMethods.FVIF(0.01, 5, 4),
      value2: FinanceMethods.FVIF(0.02, 5, 4),
      value3: FinanceMethods.FVIF(0.03, 5, 4),
      value4: FinanceMethods.FVIF(0.04, 5, 4),
      value5: FinanceMethods.FVIF(0.05, 5, 4),
      value6: FinanceMethods.FVIF(0.06, 5, 4),
      value7: FinanceMethods.FVIF(0.07, 5, 4),
      value8: FinanceMethods.FVIF(0.08, 5, 4),
      value9: FinanceMethods.FVIF(0.09, 5, 4),
      value10: FinanceMethods.FVIF(0.10, 5, 4),
    });
    // 6
    this.dataSource.push({
      period: 6,
      value1: FinanceMethods.FVIF(0.01, 6, 4),
      value2: FinanceMethods.FVIF(0.02, 6, 4),
      value3: FinanceMethods.FVIF(0.03, 6, 4),
      value4: FinanceMethods.FVIF(0.04, 6, 4),
      value5: FinanceMethods.FVIF(0.05, 6, 4),
      value6: FinanceMethods.FVIF(0.06, 6, 4),
      value7: FinanceMethods.FVIF(0.07, 6, 4),
      value8: FinanceMethods.FVIF(0.08, 6, 4),
      value9: FinanceMethods.FVIF(0.09, 6, 4),
      value10: FinanceMethods.FVIF(0.10, 6, 4),
    });
    // 7
    this.dataSource.push({
      period: 7,
      value1: FinanceMethods.FVIF(0.01, 7, 4),
      value2: FinanceMethods.FVIF(0.02, 7, 4),
      value3: FinanceMethods.FVIF(0.03, 7, 4),
      value4: FinanceMethods.FVIF(0.04, 7, 4),
      value5: FinanceMethods.FVIF(0.05, 7, 4),
      value6: FinanceMethods.FVIF(0.06, 7, 4),
      value7: FinanceMethods.FVIF(0.07, 7, 4),
      value8: FinanceMethods.FVIF(0.08, 7, 4),
      value9: FinanceMethods.FVIF(0.09, 7, 4),
      value10: FinanceMethods.FVIF(0.10, 7, 4),
    });
    // 8
    this.dataSource.push({
      period: 8,
      value1: FinanceMethods.FVIF(0.01, 8, 4),
      value2: FinanceMethods.FVIF(0.02, 8, 4),
      value3: FinanceMethods.FVIF(0.03, 8, 4),
      value4: FinanceMethods.FVIF(0.04, 8, 4),
      value5: FinanceMethods.FVIF(0.05, 8, 4),
      value6: FinanceMethods.FVIF(0.06, 8, 4),
      value7: FinanceMethods.FVIF(0.07, 8, 4),
      value8: FinanceMethods.FVIF(0.08, 8, 4),
      value9: FinanceMethods.FVIF(0.09, 8, 4),
      value10: FinanceMethods.FVIF(0.10, 8, 4),
    });
    // 9
    this.dataSource.push({
      period: 9,
      value1: FinanceMethods.FVIF(0.01, 9, 4),
      value2: FinanceMethods.FVIF(0.02, 9, 4),
      value3: FinanceMethods.FVIF(0.03, 9, 4),
      value4: FinanceMethods.FVIF(0.04, 9, 4),
      value5: FinanceMethods.FVIF(0.05, 9, 4),
      value6: FinanceMethods.FVIF(0.06, 9, 4),
      value7: FinanceMethods.FVIF(0.07, 9, 4),
      value8: FinanceMethods.FVIF(0.08, 9, 4),
      value9: FinanceMethods.FVIF(0.09, 9, 4),
      value10: FinanceMethods.FVIF(0.10, 9, 4),
    });
  }

  ngOnInit(): void {
  }
}
