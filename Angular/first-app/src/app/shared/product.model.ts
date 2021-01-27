export class Product {
    public id: string;
    public name: string;
    public price: number;
    public category: string;
    public quantity: number;

    constructor(id:string, name: string, price: number, category: string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
        this.quantity=0;
    }
}
