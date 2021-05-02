import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameValueComponent } from './name-value.component';



@NgModule({
  declarations: [NameValueComponent],
  exports: [
    NameValueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NameValueModule { }
