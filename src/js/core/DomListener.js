export default class DomListener {
    constructor($root) {
        this.$root = $root;
        this.getAction = this.getAction.bind(this)
    }
    getAction(event) {
        event.preventDefault()
        const action = event.target.dataset.action;
        if (action) {
            this[action](event);
        }
    }
    initAddEventListener() {
        this.$root.addEventListener("click", this.getAction)
    }
    render() {
        this.$root.insertAdjacentHTML("afterBegin", this.toHTML())
        return this
    }
}