import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes:Recipe[]= [
        new Recipe('a test recipe','awesome','https://homepages.cae.wisc.edu/~ece533/images/airplane.png'),
        new Recipe('a test recipe','awesome','https://homepages.cae.wisc.edu/~ece533/images/airplane.png')
      ];

    getRecipe(){
        return this.recipes.slice();
    }
}