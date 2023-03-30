export const setProducts=(products)=>{
    return{
        type:"SET_PRODUCTS",
        data:products
    }
}

export const selectedProduct=(product)=>{
    return {
        type:"SELECTED_PRODUCT",
        data:product
    }
}

export const removeSelectedProduct=()=>{
    return {
        type:"REMOVE_SELECTED_PRODUCT",
    }
}