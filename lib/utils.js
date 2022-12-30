
import { cartState } from './../State/State';
import {getReoil,setRecoil} from 'recoil-nexus'

export const addOne = (quantity) =>{
    const cartValue = getReoil(cartState)
    if(cartValue <= quantity) {
    setRecoil(cartState,(oldState)=>oldState + 1)
    }

}


export const menusOne = () =>{
    const cartValue = getReoil(cartState)
    if(cartValue >= 0) {
        setRecoil(cartState,(oldState)=>oldState - 1)
    }


}