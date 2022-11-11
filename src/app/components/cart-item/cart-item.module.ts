import { IonicModule } from '@ionic/angular';
import { CartItemComponent } from './cart-item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule ({
  declarations: [CartItemComponent],
  imports: [CommonModule,IonicModule],
  exports: [CartItemComponent],
})
export class CartItemModule {}
