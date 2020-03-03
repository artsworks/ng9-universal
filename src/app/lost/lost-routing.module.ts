import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostComponent } from './lost.component';

const routes: Routes = [{ path: '', component: LostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LostRoutingModule { }
