import axios from "axios";

import { getProducts } from "../store/reducers/ProductReducer";
export const asyncgetproducts=()=> async(dispatch,getState)=>{
    console.log(getState());
    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        dispatch(getProducts(response.data));
    }catch(err){
        console.error("Error fetching products",err)
    }
}