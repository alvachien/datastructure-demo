import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceDemoComponent } from './finance-demo/finance-demo.component';
import { MaterialUIModule } from 'src/app/material-ui.module';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [FinanceDemoComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MaterialUIModule,
    TranslocoModule,
  ]
})
export class FinanceModule { }
