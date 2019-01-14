export class Produit {
    name: string;
    supplier: string;
    emailSupplier: string;
    ingredients: Array<string>;
    description: string;
    age: number;
    conservationCondition: string;
    price: number;

    constructor(
        name: string, 
        supplier: string,
        emailSupplier: string,
        ingredients: Array<string>,
        description: string,
        age: number,
        conservationCondition: string,
        price: number,        
        )
        {
        this.name = name;
        this.supplier = supplier;
        this.emailSupplier = emailSupplier;
        this.ingredients = ingredients;
        this.description = description;
        this.age = age;
        this.conservationCondition = conservationCondition;
        this.price = price;
        
        }
}
export const tProduits = [
    new Produit( 'Tarte citron', 'Carrefour', 'carrefour@carrefour.fr',['pate brisée', 'citron', 'conservateur'], 'Ceci est une tarte au citron', 0.5, 'A conserver au frais', 3.99),
    new Produit( 'Bière Heineken', 'Leclerc', 'leclerc@leclerc.fr',['houblon', 'levure'], 'Ceci est une bière heineken', 0.5, 'A conserver au frais ou à température ambiante', 2.00),
    new Produit( 'Rhum Vieux', 'Géant', 'géant@géant.fr',['canne à sucre', 'citron', 'sucre'], 'Ceci est un rhum vieux', 10, 'A conserver à température ambiante', 10.00),
    new Produit( 'Vin rouge', 'Auchan', 'auchan@auchan.fr',['raisins', 'conservateur'], 'Ceci est un vin rouge du vignier le plus beau du monde', 5, 'A conserver au frais', 8.99),
    new Produit( 'yahourt', 'Danone', 'danone@danone.fr',['lait fermenté', 'fraise', 'conservateur'], 'Ceci est un yahourt à la fraise', 0.5, 'A conserver au frais', 1.99),
]


