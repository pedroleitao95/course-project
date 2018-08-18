import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Another Recipe', 'Another recipe test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {

   }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}
