
import { cartIsOpenState, cartState, uploadImageState } from './../State/State';
import {getRecoil,setRecoil} from 'recoil-nexus'
import { toast } from 'react-toastify';
import { api_key } from './../config';

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

export const notify = (message) => toast(message);



export  function  convertToBase64(file) {
    let base64String = "";


    var reader = new FileReader();
    reader.onload = async function  () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");


        setRecoil(uploadImageState,base64String)
        let result
        try {
             result = await fetch(`http://freeimage.host/api/1/upload/?key=${api_key}&source=${base64String}&format=txt`,{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
            })
            console.log(result)
        } catch(e){
            console.log(e)
        }


        console.log('response', result)
    }
    reader.readAsDataURL(file);
}
