import { CartService } from './../../services/cart.service';
import { Juego } from './../../models/juegos.model';
import { CartItem } from './../../models/cart-item.model';
import { JuegoService } from './../../services/juegos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  juego: Juego;

  constructor(
    private activateRoute: ActivatedRoute,
    private juegoService: JuegoService,
    private cartService: CartService,
    private toastCtrl: ToastController
    ) {
    this.id = +this.activateRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.juego = this.juegoService.getJuego(this.id);
  }
  addItemCart(){
    const cartitem: CartItem = {
      id: this.juego.id,
      name: this.juego.title,
      image: this.juego.image,
      price: this.juego.price,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Juego agregador al carrito',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}
