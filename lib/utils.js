
import { cartIsOpenState, cartState } from './../State/State';
import {getRecoil,setRecoil} from 'recoil-nexus'

// export const addOne = (quantity) =>{
//     const cartValue = getRecoil(cartState)
//     if(cartValue.totalQty < quantity) {
//     setRecoil(cartState,(oldState)=>{
//         return {
//             ...oldState,totalQty:oldState['totalQty']+1
//         }
//     })
//     }

// }


// export const menusOne = () =>{
//     const cartValue = getRecoil(cartState)
//     if(cartValue.totalQty > 0) {
//         setRecoil(cartState,(oldState)=>{
//             return {
//                 ...oldState,totalQty:oldState['totalQty']-1
//             }
//         })
//     }


// }

export const addToCart = (items) => {
    setRecoil(cartState,(oldState)=>{
        return {
            ...oldState,totalQty:oldState['totalQty']+items.length, products:[...oldState['products'],...items]
        }
    })
}

export const buyNow = (items) => {
    setRecoil(cartIsOpenState, true)
}