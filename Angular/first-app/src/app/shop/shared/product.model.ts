export class Product {
    public name: string;
    public price: number;
    public description: string;
    public category: string;
    public quantity: number;

    constructor(name: string, price: number, description: string, category: string){
        this.name=name;
        this.price=price;
        this.description=description;
        this.category=category;
        this.quantity=0;
    }


}
