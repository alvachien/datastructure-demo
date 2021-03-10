import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceDemoComponent } from './finance-demo/finance-demo.component';

const routes: Routes = [
  { path: '', component: FinanceDemoComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
