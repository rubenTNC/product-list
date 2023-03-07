import createElem from "../core/createElem";
import { productList } from "../core/productList";
import FormProduct from "./formProduct";
import Product from "./Product";

export default class Products {
    constructor(selector, title) {
        this.$selector = selector;
        this.title = title;
        this.products = createElem("div", "products");
        this.onClick = this.onClick.bind(this)
        this.products.addEventListener("click", this.onClick)
    }
    toHTML() {
        return `
            <div class="header">
                <h3 class="title">${this.title}</h3>
                <button>
                    <span class="material-symbols-outlined" data-action="create">add_circle</span>
                </button>
            </div>
            <ul class="list"></ul>
        `
    }
    render() {
        this.$selector.insertAdjacentElement("afterBegin", this.products);
        this.products.insertAdjacentHTML("afterBegin", this.toHTML())
    }
    getList() {
        return this.$selector.querySelector(".list")
    }
    addProducts() {
        const products = productList.map(item => new Product(this, item.name, item.price))
        products.forEach(product => {
            this.getList().insertAdjacentElement("beforeEnd", product.product)
            product.render()
        })
    }
    create(name, price) {
       new FormProduct(this.$selector).render()
    }
    onClick(event) {
        const action = event.target.dataset.action;
        console.log(action)
        if (action) {
            this[action]();
          }
        
    }
    start() {
        this.render()
        this.addProducts()
    }

}