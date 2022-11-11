import { IonicModule } from '@ionic/angular';
import { JuegoCardComponent } from './juego-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [JuegoCardComponent],
  imports: [CommonModule,IonicModule],
  exports: [JuegoCardComponent],
})
export class JuegoCardModule {}
