import createElem from "../core/createElem";
import { productList } from "../core/productList";

export default class Product {
    constructor(products, name, price) {
        this.products = products;
        this.name = name;
        this.price = price;
        this.product = createElem("ul", "product");
        this.onClick = this.onClick.bind(this)
        this.product.addEventListener("click", this.onClick)

    }
    toHTML() {
        return `
            <h4 class="name">${this.name}</h4>
            <div class="info">
                <div class="price">${this.price}</div>
            </div>
            <div class="control">
                <button >
                    <span class="material-symbols-outlined" data-action="update">
                        update
                    </span>
                </button>
                <button>
                    <span class="material-symbols-outlined" data-action="delete">
                        delete
                    </span>
                </button>
            </div>
        `
    }
    render() {
        this.product.insertAdjacentHTML("afterBegin", this.toHTML())
    }
    delete() {
        const productIndex = productList.findIndex(item => item.name === this.name)
        productList.splice(productIndex, 1)
        this.products.getList().removeChild(event.target.closest(".product"))
    }
    update() {
        
    }
    onClick(event) {
        const action = event.target.dataset.action;
        if (action) {
            this[action]();
          }
        
    }

}