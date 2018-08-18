import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Another Recipe', 'Another recipe test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
