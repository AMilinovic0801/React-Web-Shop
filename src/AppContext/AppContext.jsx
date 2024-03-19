import { createContext } from "react";

const AppContext = createContext({
    singleCarData: {},
    setSingleCarData: () => {},
    carShop: {},
    setCarShop: () => {},
    singlePartData: {},
    setSinglePartData: () => {},
    partShop: {},
    setPartShop: () => {}
});

export {AppContext};