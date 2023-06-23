import { CartService } from './../services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { Apparel } from '../shared/models/Apparel';
import { ClothesService } from '../services/apparel/apparel.service';

@Component({
  selector: 'app-clothes-page',
  templateUrl: './clothes-page.component.html',
  styleUrls: ['./clothes-page.component.css']
})
export class ClothesPageComponent implements OnInit{

  clothes!: Apparel;
  constructor(private activatedRoute:ActivatedRoute,
    private clothesService: ClothesService,
    private cartService:CartService,
    private router:Router) {
    activatedRoute.params.subscribe((params) =>{
      if(params['id'])
      this.clothes = clothesService.getClothesById(params['id'])
    })
  }

  ngOnInit(): void{
  }

  addToCart(){
    this.cartService.addToCart(this.clothes);
    this.router.navigateByUrl('/cart-page');
  }

}