import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphRoutingModule } from './graph-routing.module';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';


@NgModule({
  declarations: [GraphDemoComponent],
  imports: [
    CommonModule,
    GraphRoutingModule
  ]
})
export class GraphModule { }
