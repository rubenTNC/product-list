import ProductList from "./components/ProductList"
import createElem from "./core/createElem"

const app = document.querySelector(".app")

const $el = createElem("div", ProductList.className)

const inProductList = new ProductList(app, "Продукты", $el).start().initAddEventListener()