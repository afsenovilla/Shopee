import { Component, Input, NgModule } from '@angular/core';
import { ClothesService } from '../services/apparel/apparel.service';
import { Apparel } from '../shared/models/Apparel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  clothesPageTags?:string[];
  clothes?:Apparel[];
  constructor(private clothesService:ClothesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params?.["searchTerm"])
      this.clothes = this.clothesService.getAllClothesBySearchTerm(params?.["searchTerm"]);
      else if (params?.["tag"])
      this.clothes = this.clothesService.getAllClothesByTag(params?.["tag"])
    else
      this.clothes = this.clothesService.getAll();
    })
  }
}
