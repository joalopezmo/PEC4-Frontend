import { Component, OnInit } from '@angular/core';

import { WineList } from '../wines';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})
export class WineitemComponent implements OnInit {

  counter:number=0;
  
  constructor() { }

  wine_list: WineList[] = [
    {
      name: 'Cabernet Sauvignon',
      imageUrl: 'https://www.wine.com/labels/155842l.jpg',
      price: 12,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: [
        {
          name: 'Vino',
          kcal: 300,
          vegan: false,
          glutenFree: false
        },],
    },
    {
      name: 'Chardonnay',
      imageUrl: 'https://www.wine.com/labels/155843l.jpg',
      price: 12,
      isOnSale: true,
      quantityInCart: 12,
      foodPairing: [
        {
          name: 'Vino',
          kcal: 300,
          vegan: false,
          glutenFree: false
        },],
    },
    {
      name: 'Pinot Grigio',
      imageUrl: 'https://www.wine.com/labels/155844l.jpg',
      price: 12,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: [
        {
          name: 'Vino',
          kcal: 300,
          vegan: false,
          glutenFree: false
        },],
    },
  ];

  items:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


  ngOnInit(): void {
  }

  incrementCounter(counter:number){
    this.counter++;
  } 

  decrementCounter(counter:number){
    this.counter--;
  }


}
