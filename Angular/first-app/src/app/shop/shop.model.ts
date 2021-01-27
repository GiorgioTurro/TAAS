import { Product } from "../shared/product.model";
export class Shop {
    public id: string;
    public name: string;
    public address: string;
    public menu: Product[];
    constructor(id:string, name: string, address: string, menu: Product[]){
        this.id = id
        this.name=name;
        this.address=address;
        this.menu=menu;
    }
}
