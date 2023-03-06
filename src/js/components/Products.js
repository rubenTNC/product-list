import { productList } from "../core/productList";
import Product from "./Product";

export default class Products {
    constructor(selector, title) {
        this.$selector = selector;
        this.title = title;
    }
    toHTML() {
        return `
        <div class="products">
            <div class="header">
                <h3 class="title">${this.title}</h3>
                <button class="create">
                    <span class="material-symbols-outlined">add_circle</span>
                </button>
            </div>
            <ul class="list"></ul>
        </div>
        `
    }
    render() {
        this.$selector.insertAdjacentHTML("afterBegin", this.toHTML())
    }
    addProducts() {
        const list = this.$selector.querySelector(".list")
        productList.forEach(product => {
            const item = new Product(product.name, product.price)
            console.log(item)
            list.insertAdjacentHTML("afterBegin", item.toHTML())
        })
    }
    start() {
        this.render()
        this.addProducts()
    }

}