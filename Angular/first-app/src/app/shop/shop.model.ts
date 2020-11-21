import { Product } from "./shared/product.model";
export class Shop {
    public name: string;
    public address: string;
    public city: string;
    public menu: Product[];
    constructor(name: string, address: string, city: string, menu: Product[]){
        this.name=name;
        this.address=address;
        this.city=city;
        this.menu=menu;
    }
}
