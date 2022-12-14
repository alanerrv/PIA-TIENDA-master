import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('../screens/listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../screens/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../screens/wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full',
      },
      {
        path: 'ubicacion',
        loadChildren: () => import('../screens/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
