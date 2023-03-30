
const initialState={
    products:[]
}

export const productReducer=(state=initialState,{type,data})=>{
    switch (type) {
        case "SET_PRODUCTS":
           return {...state,products:data}
        default:
            return state
    }
}

export const selectedProductReducer=(state={},{type,data})=>{
    switch (type) {
        case "SELECTED_PRODUCT":
            
            return {...state,...data}
        
        case "REMOVE_SELECTED_PRODUCT":
            return {};
        default:
           return state;
    }
}