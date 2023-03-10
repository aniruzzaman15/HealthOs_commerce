import {atom} from 'recoil'

export const userState = atom({
    key: "userState",
    default: null
});

export const ProductsState = atom({
    key: "ProductsState",
    default: []
});

export const cartState = atom({
    key: "cartState",
    default: {
        totalQty:0,
        products:[]
    }
});

export const cartIsOpenState = atom({
    key: "cartIsOpenState",
    default: false
});


export const uploadImageState = atom({
    key: "uploadImageState",
    default: null
});

export const activeProductDetailState = atom({
    key: "activeProductDetailState",
    default: null
});