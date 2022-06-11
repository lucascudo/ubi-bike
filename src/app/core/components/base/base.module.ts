import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from './base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    BaseComponent,
  ]
})
export class BaseModule { }
