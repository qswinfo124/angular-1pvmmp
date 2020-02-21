import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './component/sample/sample.component';
import {GridAllModule} from '@syncfusion/ej2-angular-grids';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes = [
  {
    path: '',
    component: SampleComponent
  }
];

@NgModule({
  declarations: [SampleComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    GridAllModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ]
})
export class SampleModule { }
