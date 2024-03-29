import { createContext, useContext, useState } from "react";
import uselocalStroge from "../hook/uselocalStroge";

export const basketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setbasket] = uselocalStroge("basket");
  function handlebasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      item.count = 1;
      setbasket([...basket, item]);
      return;
    }
    basket[index].count++;
    setbasket([...basket]);
  }
  function delbasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }
  function artir(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count++;
    setbasket([...basket]);
  }
  function azalir(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count--;
    setbasket([...basket]);
    if (basket[index].count<1) {
        setbasket(basket.filter((x) => x._id !== item._id));
    }
  }
  const data = { basket, setbasket, handlebasket,artir,azalir,delbasket };

  return (
    <basketContext.Provider value={data}>{children}</basketContext.Provider>
  );
}
export const usebasket = () => useContext(basketContext);
