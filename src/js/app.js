import Products from "./components/Products"

const app = document.querySelector(".app")

export const products = new Products(app, "Товары").start()

