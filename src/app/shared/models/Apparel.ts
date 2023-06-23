export class Apparel{
    // constructor(id:number){
    //     this.id = id;
    // }
    id!:number;
    name!:string;
    //description!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    imageUrl!:string;
    sizes!:string[];
    
}