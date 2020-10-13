import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredients.model';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomato',8),
        new Ingredient('Papaya',15)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
    addIngredients(ingredient:Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientsChanged.emit(this.ingredients.slice());
    }
}