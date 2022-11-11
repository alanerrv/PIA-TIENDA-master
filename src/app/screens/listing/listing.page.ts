import { Router } from '@angular/router';
import { JuegoService } from './../../services/juegos.service';
import { Category } from '../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juegos.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  juegos: Juego[] = [];

  constructor(private juegoService: JuegoService,private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.juegos = this.juegoService.getJuegos();
  }
  getCategories(){
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/images/todo.svg',
        active: true,
      },
      {
        id: 2,
        label: 'Xbox',
        image: 'assets/images/logo-xbox.svg',
        active: false,
      },
      {
        id: 3,
        label: 'Play',
        image: 'assets/images/logo-playstation.svg',
        active: false,
      },
      {
        id: 4,
        label: 'Steam',
        image: 'assets/images/logo-steam.svg',
        active: false,
      },
    ];
  }
  goToDetailPage(id: number){
    this.router.navigate(['detail',id]);
  }

}
