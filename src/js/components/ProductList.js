import createElem from "../core/createElem";
import DomListener from "../core/DomListener";
import { productList } from "../core/productList";
import Product from "./Product";

export default class ProductList extends DomListener{
    static className = "products"
    constructor(selector, title, $root) {
        super($root)
        this.$selector = selector;
        this.title = title;
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
        this.$selector.insertAdjacentElement("afterBegin", this.$root);
        this.$root.insertAdjacentHTML("afterBegin", this.toHTML());
        return this
    }
    addProducts() {
        const list = this.$root.querySelector(".list")
        productList.forEach((item) => {
            const $el = createElem("div", Product.className);
            list.insertAdjacentElement("afterBegin", $el)
            const el = new Product(item.name, item.price, $el);
            el.render()
            el.initAddEventListener()
        })
    }
    create() {
        
    }
    start() {
        this.render()
        this.addProducts()
        return this
    }

}