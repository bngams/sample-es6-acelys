import { AppComponent } from "./app-component.js";
import { ProductCard } from "./product-card.js";
import { Http } from "../utils/http.js";
import { ProductService } from "../services/product-service.js";

const TEMPLATE = `
    <div id="product-list"></div>
`;

export class ProductList extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
        componentHandler.upgradeElements(this);
    }

    bindElements() {
        this.containerProducts = this.querySelector("#product-list");
    }

    bindEvents() {
        this.handleCreateProductEvent();
    }

    onReady() {
        // Http.getWithCallback("http://localhost:3004/products", callbackLoadProdcuts, callbackErrorLoadProducts);
        ProductService.getProducts().then((data) => {
            this.products = JSON.parse(data);
            this.change();
        });
        // this.products = JSON.parse( await ProductService.getProducts() );
    }

    callbackLoadProdcuts(products) {

    }

    callbackErrorLoadProducts(error) {

    }

    change() {
        for (let p of this.products) {
            this.addProductCard(p);
        }
    }

    handleCreateProductEvent() {
        document.addEventListener('create-product', (e) => {
            this.addProductCard(e.detail);
        });
    }

    addProductCard(product) {
        this.containerProducts.appendChild(new ProductCard(product));
    }

}