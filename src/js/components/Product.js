export default class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toHTML() {
        return `
        <li class="product">
            <h4 class="name">${this.name}</h4>
            <div class="info">
                <div class="price">${this.price}</div>
            </div>
            <div class="control">
                <button data-actions="update">
                    <span class="material-symbols-outlined">
                        update
                    </span>
                </button>
                <button data-actions="delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </li>
        `
    }
    delete() {
        
    }

}