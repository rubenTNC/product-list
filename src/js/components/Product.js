import DomListener from "../core/DomListener";

export default class Product extends DomListener {
    static className = "product"
    constructor(name, price, $root) {
        super($root)
        this.name = name;
        this.price = price;
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
    delete(event) {
        this.$root.remove()
    }
    update() {
        
    }
    render() {
        this.$root.insertAdjacentHTML("afterBegin", this.toHTML());
        return this;
    }
   

}