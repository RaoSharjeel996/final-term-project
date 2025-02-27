import { getCartProductFromLS } from "./getCartProducts.js";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price };
};

//todo Don't Forget To LIKE SHARE & SUBSCRIBE TO H&S Mart TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/H&S Marttechnical
