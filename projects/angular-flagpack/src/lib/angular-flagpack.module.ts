import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFlagpackComponent } from './angular-flagpack.component';



@NgModule({
  declarations: [
    AngularFlagpackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AngularFlagpackComponent]
})
export class AngularFlagpackModule { }
