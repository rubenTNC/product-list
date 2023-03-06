import createElem from "../core/createElem";
import { productList } from "../core/productList";
import Product from "./Product";

export default class Products {
    constructor(selector, title) {
        this.$selector = selector;
        this.title = title;
        this.products = createElem("div", "products");


    }
    toHTML() {
        return `
            <div class="header">
                <h3 class="title">${this.title}</h3>
                <button class="create">
                    <span class="material-symbols-outlined">add_circle</span>
                </button>
            </div>
            <ul class="list"></ul>
        `
    }
    render() {
        this.$selector.insertAdjacentElement("afterBegin", this.products);
        this.products.insertAdjacentHTML("afterBegin", this.toHTML())
    }
    addProducts() {
        const list = this.$selector.querySelector(".list")
        const products = productList.map(item => new Product(this, item.name, item.price))
        products.forEach(product => {
            list.insertAdjacentElement("beforeEnd", product.product)
            product.render()
        })
    }
    update() {
        const list = this.$selector.querySelector(".list")
        const items = list.querySelectorAll(".product");
        items.forEach(item => list.removeChild(item));
        const products = productList.map(item => new Product(this, item.name, item.price))
        products.forEach(product => {
            list.insertAdjacentElement("beforeEnd", product.product)
            product.render()
        })

    }
    start() {
        this.render()
        this.addProducts()
    }

}