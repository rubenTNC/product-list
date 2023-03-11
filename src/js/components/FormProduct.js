import DomListener from "../core/DomListener";
export default class FormProduct extends DomListener {
    static className = "popap"
    constructor($root) {
        super($root)
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
                <input type="text" id="formPrice" name="price" class="modal__input">
            </div>
            <div class="btns">
                <button class="modal__btn" data-action="save">Сохранить</button>
                <button class="modal__btn" data-action="close">Отмена</button>
            </div>
        </form>
        `
    }
    dataAcquisition () {
        const form = this.$root.querySelector(".modal")
        const formData = new FormData(form)
        const name = formData.get("name")
        const price = formData.get("price")
        if(name && price) {
            return {
                name,
                price
            }
        }
    }
    save() {
       if(this.dataAcquisition()) {
        this.close()
       }
    }
    close() {
        this.$root.remove()
    }
}