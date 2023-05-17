import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScientistComponent } from './scientist/scientist.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'nhakh', component:ScientistComponent},
  {path:'sp', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
