// Interface Product
export interface Product {
    _id: number; // Ajoutez '_id' ici
    name: string;
    description: string;
    category: string[];
    price: number;
    sold_price: number;
    regular_price: number;
    imgUrl: string;
    createdAt: Date;
    updatedAt?: Date;
  }
  
  // Constructeur de Product
  export class Product {
    constructor(
      public _id: number, // Ajoutez '_id' ici
      public name: string,
      public description: string,
      public category: string[],
      public price: number,
      public sold_price: number,
      public regular_price: number,
      public imgUrl: string,
      public createdAt: Date,
      public updatedAt?: Date
    ) {}
  }
  