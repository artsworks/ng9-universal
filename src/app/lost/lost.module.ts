import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostRoutingModule } from './lost-routing.module';
import { LostComponent } from './lost.component';


@NgModule({
  declarations: [LostComponent],
  imports: [
    CommonModule,
    LostRoutingModule
  ]
})
export class LostModule { }
