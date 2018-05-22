import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatListModule, MatDividerModule, MatButtonModule,
  MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
