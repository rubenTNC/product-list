import createElem from "../core/createElem";
import DomListener from "../core/DomListener";
import FormProduct from "./FormProduct";
import Product from "./Product";


export default class ProductList extends DomListener {
    static className = "products"
    constructor(selector, title, $root, productsList) {
        super($root)
        this.$selector = selector;
        this.title = title;
        this.productsList = productsList;
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
    add() {
        this.$selector.insertAdjacentElement("afterBegin", this.$root);
        this.render()
        return this
    }
    getList() {
        return this.$root.querySelector(".list")
    }
    addProduct(name, price){
        const $el = createElem("div", Product.className);
        const product = new Product(name, price, $el);
        this.getList().insertAdjacentElement("beforeEnd", $el)
        product.render(product.toHTML())
        product.initAddEventListener()

    }
    addProducts() {
        this.productsList.forEach((item) => {
            this.addProduct(item.name, item.price)
        })
    }
    create() {
        // const $el = createElem("div", FormProduct.className);
        // const form = new FormProduct($el)
        // this.$selector.insertAdjacentElement("beforeEnd", $el)
        // form.render(form.toHTML()).initAddEventListener()
        // const isFormSave = form.save()
        // console.log(isFormSave)
    }

    start() {
        this.add()
        this.addProducts()
        return this
    }

}