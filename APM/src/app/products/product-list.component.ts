import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    productTitle:string = "Product List!";
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    errorMessgae:string;
    _listFilter:string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts=this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products:IProduct[]=[];

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("In onInit()");
        this.productService.getProducts().subscribe(
            products=>{
                this.products=products;
                this.filteredProducts = this.products;
            },
            error=>this.errorMessgae=<any>error
        );
        
    }

    constructor(private productService: ProductService) {
        
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }
}