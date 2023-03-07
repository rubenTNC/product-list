import createElem from "../core/createElem";


export default class FormProduct {
    constructor(selector) {
        this.selector = selector;
        this.popap = createElem("div", "popap");
        this.onClick = this.onClick.bind(this)
        this.popap.addEventListener("click", this.onClick)
    }
    toHTML() {
        return `
        <form class="modal">
            <span class="material-symbols-outlined modal-close" data-action="close">
                close
            </span>
            <div class="modal__item">
                <label for="formName" class="modal__label">Название</label>
                <input type="text" id="forName" name="name" class="modal__input">
            </div>
            <div class="modal__item">
                <label for="formPrice" class="modal__label">Цена</label>
                <input type="text" id="formEmail" name="price" class="modal__input">
            </div>
            <div class="btns">
                <button class="modal__btn" data-action="save">Сохранить</button>
                <button class="modal__btn" data-action="close">Отмена</button>
            </div>
        </form>
        `
    }
    render () {
        this.selector.insertAdjacentElement("afterBegin", this.popap)
        this.popap.insertAdjacentHTML("afterBegin", this.toHTML())
    }
    close() {
       this.selector.removeChild(this.popap)
    }
    save() {
    }
    onClick(event) {
        event.preventDefault()        
        const action = event.target.dataset.action;
        if (action) {
            this[action]();
          }
    }
}