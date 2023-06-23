import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { ClothesService } from '../services/apparel/apparel.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input()
  clothesPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
;  constructor(private clothesService:ClothesService) {}

  ngOnInit(): void {
    if(!this.clothesPageTags)
    this.tags = this.clothesService.getAllTags();
  }

}
