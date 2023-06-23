import { Injectable } from '@angular/core';
import { Apparel } from 'src/app/shared/models/Apparel';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

  getClothesById(id: number): Apparel{
    return this.getAll().find(clothes => clothes.id == id)!;
  }

  getAllClothesBySearchTerm(searchTerm:string) :Apparel[]{
    return this.getAll().filter(apparel => apparel.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
getAllTags():Tag[]{
return [
  { name: "All", count: 16 },
  { name: "Trending", count: 5 },
  { name: "Vestido", count: 2 },
  { name: "Verano", count: 3 },
  { name: "Camiseta", count: 3 },
  { name: "Darks", count: 1 },
  { name: "Sudadera", count: 1 },
  { name: "Invierno", count: 1 },
];

}

getAllClothesByTag(tag: string): Apparel[]{
return tag == "All" ?
this.getAll() :
this.getAll().filter(apparel => apparel.tags?.includes(tag));
  // if(tag === "All")
  // return this.getAll();
  // else
  // return this.getAll().filter(apparel => apparel.tags?.includes(tag))
}

getAll():Apparel[]{
  return[
  {
  id: 1,
    name: 'Vestido verde',
        //description:'',
        price: 90,
    sizes: ['S','M','L','XL'],
    favorite: true,
    imageUrl: '/assets/images/clothes-h-1.jpg',
    tags: ['Trending', 'Vestido', 'Verano'],
  },{
    id: 2,
    name: 'Camiseta diseño',
        //description:'',
        price: 45,
    sizes: ['S','M','L'],
    favorite: false,
    imageUrl: '/assets/images/clothes-h-2.jpg',
    tags: ['Trending', 'Camiseta'],
  },{
    id: 3,
    name: 'Camiseta peace',
        //description:'',
        price: 54,
    sizes: ['M','L'],
    favorite: false,
    imageUrl: '/assets/images/clothes-h-3.jpg',
    tags: ['Trending', 'Camiseta', 'Darks'],
  },{
    id: 4,
    name: 'Vestido violeta',
        //description:'',
        price: 32,
    sizes: ['S','M'],
    favorite: false,
    imageUrl: '/assets/images/clothes-h-4.jpg',
    tags: ['Vestido', 'Verano'],
  },{
    id: 5,
      name: 'Sudadera roja',
        //description:'',
        price: 60,
      sizes: ['S','M','L','XL'],
      favorite: true,
      imageUrl: '/assets/images/clothes-h-5.jpg',
      tags: ['Trending', 'Sudadera', 'Invierno'],
    },{
      id: 6,
        name: 'Camiseta gris',
        //description:'',
        price: 59,
        sizes: ['L','XL'],
        favorite: true,
        imageUrl: '/assets/images/clothes-h-6.jpg',
        tags: ['Trending', 'Camiseta', 'Verano'],
      },
  ]
}

}
