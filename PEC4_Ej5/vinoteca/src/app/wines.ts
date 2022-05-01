import { Food } from "./food";
export class WineList{
        name: string;
        imageUrl: string;
        price: number;
        isOnSale: boolean;
        quantityInCart: number;
        foodPairing: Food[];

        constructor(name: string, imageUrl: string, price: number, isOnSale: boolean, quantityInCart: number, foodPairing: Food[]){
            this.name = name;
            this.imageUrl = imageUrl;
            this.price = price;
            this.isOnSale = isOnSale;
            this.quantityInCart = quantityInCart;
            this.foodPairing = foodPairing;
        }
        
    }