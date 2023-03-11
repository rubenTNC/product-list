import ProductList from "./components/ProductList"
import createElem from "./core/createElem"
import { productList } from "./core/productList";

const app = document.querySelector(".app")

const $el = createElem("div", ProductList.className)

 export const inProductList = new ProductList(app, "Продукты", $el, productList).start().initAddEventListener()
