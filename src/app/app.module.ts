import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-ui.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { HomeComponent } from './app.component';
import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KmpDemoComponent,
    ListDemoComponent,
    SortalgorithmDemoComponent,
    BinarytreeDemoComponent,
    GraphDemoComponent,
    SubjectDemoComponent,
    TreeDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialUIModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
