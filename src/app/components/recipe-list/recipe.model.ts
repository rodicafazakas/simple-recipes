export class Recipe {
  public name: string;
  public imagePath: string;
  public ingredients: string; // An array should be in here.
  public howto: string;
  public category: string;

  constructor(name: string, imagePath: string, ingredients: string, desc: string, category: string) {
    this.name =  name;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this. howto = desc;
    this.category = category;
  };

};
