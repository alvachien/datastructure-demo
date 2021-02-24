import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, HomeComponent } from './app.component';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule, } from '@angular/material/checkbox';
import { MatChipsModule, } from '@angular/material/chips';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatDividerModule, } from '@angular/material/divider';
import { MatGridListModule, } from '@angular/material/grid-list';
import { MatIconModule, } from '@angular/material/icon';
import { MatInputModule, } from '@angular/material/input';
import { MatListModule, } from '@angular/material/list';
import { MatMenuModule, } from '@angular/material/menu';
import { MatProgressBarModule, } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule, } from '@angular/material/progress-spinner';
import { MatSelectModule, } from '@angular/material/select';
import { MatRadioModule, } from '@angular/material/radio';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatSliderModule, } from '@angular/material/slider';
import { MatSortModule, } from '@angular/material/sort';
import { MatSlideToggleModule, } from '@angular/material/slide-toggle';
import { MatSnackBarModule, } from '@angular/material/snack-bar';
import { MatTableModule, } from '@angular/material/table';
import { MatTabsModule, } from '@angular/material/tabs';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatTooltipModule, } from '@angular/material/tooltip';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatExpansionModule, } from '@angular/material/expansion';
import { MatStepperModule, } from '@angular/material/stepper';
import { MatTreeModule, } from '@angular/material/tree';

import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslocoRootModule } from './transloco/transloco-root.module';

// @NgModule({
//   imports: [
//     CdkTableModule,
//     CdkTreeModule,
//     MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
//     MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
//     MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule,
//     MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
//     MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
//     MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
//     MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule, MatTreeModule,
//   ],
//   exports: [
//     CdkTableModule,
//     CdkTreeModule,
//     MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
//     MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
//     MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule,
//     MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
//     MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
//     MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
//     MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule, MatTreeModule,
//   ],
// })
// export class DSMaterialModule { }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KmpDemoComponent,
    BinarytreeDemoComponent,
    SortalgorithmDemoComponent,
    ListDemoComponent,
    TreeDemoComponent,
    GraphDemoComponent,
    SubjectDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTreeModule,
    MatListModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
