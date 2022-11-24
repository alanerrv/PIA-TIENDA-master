import { AlertController } from '@ionic/angular';
import { FavService } from './../../services/fav.service';import { CartService } from './../../services/cart.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FavItem } from 'src/app/models/fav-item.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  favItems$: Observable<FavItem[]>;
  constructor(private favService: FavService, private alertCtrl: AlertController ) { }

  ngOnInit() {
    this.favItems$ = this.favService.getFav();
  }
  onIncrease(item: FavItem) {}
  onDecrease(item: FavItem) {}

  async removeFromFav(item: FavItem) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Estas seguro que desea eliminar?',
      buttons: [
        {
          text: 'Si',
          handler: () => this.favService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }

}
