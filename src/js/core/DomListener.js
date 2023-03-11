export default class DomListener {
    constructor($root) {
        this.$root = $root;
        this.getAction = this.getAction.bind(this)
    }
    getAction(event) {
        const action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
    initAddEventListener() {
        this.$root.addEventListener("click", this.getAction)
    }
}