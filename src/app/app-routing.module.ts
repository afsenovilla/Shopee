import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothesPageComponent } from './clothes-page/clothes-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'clothes/:id', component:ClothesPageComponent},
  {path: 'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
