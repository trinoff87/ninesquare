import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatListModule, MatDividerModule, MatButtonModule, MatIconModule} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
