import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app.component';

import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kmp-demo', component: KmpDemoComponent },
  { path: 'sortalg-demo', component: SortalgorithmDemoComponent },
  { path: 'list-demo', component: ListDemoComponent },
  { path: 'binarytree-demo', component: BinarytreeDemoComponent },
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'subject-demo', component: SubjectDemoComponent },
  { path: 'finance', loadChildren: () => import('./pages/finance/finance.module').then(m => m.FinanceModule) },
  { path: 'graph', loadChildren: () => import('./pages/graph/graph.module').then(m => m.GraphModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
