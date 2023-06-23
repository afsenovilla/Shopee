import { Injectable } from '@angular/core';
import { Appareal } from 'src/app/shared/models/Apparel';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

getAll():Appareal[]{
  return[
  {
  id: 1,
    name: 'La percha',
    description:'El accesorio de moda que transformará tu armario con su diseño elegante y sofisticado, convirtiéndose en un imprescindible para organizar tus prendas con estilo y estar a la vanguardia de las tendencias.',
    price: 90,
    sizes: ['S','M','L','XL'],
    favorite: false,
    imageUrl: '/assets/images/clothes-v-1.jpg',
    tags: ['Trending','Percha', 'Imprescindible'],
  },{
    id: 2,
    name: 'La original',
    description:'Esta camiseta es un verdadero tesoro de estilo con su diseño exclusivo que presenta la imagen cautivadora de un gato de la suerte. Fabricada con algodón suave y de alta calidad, te brinda comodidad y estilo incomparables. Lleva contigo el símbolo de la buena fortuna y destaca en cualquier ocasión con esta prenda única y llena de personalidad.',
    price: 45,
    sizes: ['S','M','L'],
    favorite: false,
    imageUrl: '/assets/images/clothes-v-2.jpg',
    tags: ['Trending','Camiseta'],
  },{
    id: 3,
    name: 'Sudadera Beans',
    description:'La sudadera "Beans" en color marrón, reconocida por su suavidad inigualable y su alta calidad, se convierte en la prenda perfecta para disfrutar de un confort excepcional sin sacrificar el estilo.',
    price: 54,
    sizes: ['M','L'],
    favorite: false,
    imageUrl: '/assets/images/clothes-v-3.jpg',
    tags: ['Trending','Sudadera'],
  },{
    id: 4,
    name: 'Leave the road',
    description:'Con su diseño único, esta camiseta te transporta a un ambiente acogedor y rústico. El estampado detallado de la cabaña vintage añade un toque de encanto y carácter a tu estilo, convirtiéndote en el centro de atención con un look auténtico y lleno de personalidad. Disfruta de la comodidad y el estilo de esta camiseta que celebra la belleza de los recuerdos atemporales.',
    price: 32,
    sizes: ['S','M'],
    favorite: false,
    imageUrl: '/assets/images/clothes-v-4.jpg',
    tags: ['Trending','Camiseta'],
  },{
    id: 5,
      name: 'Desportivas',
      description:'Estas deportivas de aspecto retro te transportan a épocas pasadas con su diseño único y lleno de nostalgia, agregando un toque de estilo y originalidad a tus outfits.',
      price: 60,
      sizes: ['S','M','L','XL'],
      favorite: false,
      imageUrl: '/assets/images/clothes-v-5.jpg',
      tags: ['Trending','Deportivas', 'Imprescindible'],
    },{
      id: 6,
        name: 'Sudadera Favela',
        description:'Fabricada con materiales de alta calidad, te envolverá en una comodidad inigualable. Ya sea para una ocasión casual o para relajarte en casa, esta sudadera color menta se convertirá en tu nueva favorita para lucir con estilo y sentirte cómodo/a en todo momento.',
        price: 59,
        sizes: ['L','XL'],
        favorite: false,
        imageUrl: '/assets/images/clothes-v-6.jpg',
        tags: ['Trending','Sudadera'],
      },{
        id: 7,
          name: 'Petit Peto',
          description:'Con su estilo único y versátil, este peto se robará todas las miradas. Su diseño elegante y cómodo te permite lucir a la moda mientras te sientes libre de moverte. ¡No esperes más para "petarlo" con este peto que combina estilo y actitud en una sola prenda!',
          price: 79,
          sizes: ['M','L'],
          favorite: false,
          imageUrl: '/assets/images/clothes-v-7.jpg',
          tags: ['Peto', 'Vintage', 'Imprescindible'],
        },
  ]
}

}
