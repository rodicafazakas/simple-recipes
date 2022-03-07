import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Beans cream", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMUsF6EMRksHQwGYqjrZWohNXUXxBI7fdaQ&usqp=CAU", "", "Boil the beans, smash them and put the fried onion on top", "Salad"),
    new Recipe("Beans cream", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMUsF6EMRksHQwGYqjrZWohNXUXxBI7fdaQ&usqp=CAU", "", "Boil the beans, smash them and put the fried onion on top", "Salad")
  ];
  constructor() {};
  ngOnInit(): void {

  }

};
