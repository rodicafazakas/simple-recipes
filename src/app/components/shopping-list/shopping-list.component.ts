import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../recipe-list/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [
   new Ingredient("beans", "300g"),
   new Ingredient("onion", "1"),
   new Ingredient("garlic", "2")
 ];

 constructore() {};

 ngOnInit() {};
};
