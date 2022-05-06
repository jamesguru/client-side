import {createSlice} from "@reduxjs/toolkit";




const cartSlice = createSlice({

    name: "cart",
    initialState:{

        products: [],

        quantity: 0,

        total:0,



    },

    reducers:{

        addProduct:(state,action) => {

            state.quantity +=1;

            state.products.push(action.payload);

            state.total += action.payload.discountedPrice ? (action.payload.discountedPrice * action.payload.quantity) : (action.payload.originalPrice * action.payload.quantity);


        },

        removeProduct: (state) => {

            state.products = [];

            state.quantity = 0;

            state.total = 0;

        }
    }
})


export const {addProduct,removeProduct} = cartSlice.actions;

export default cartSlice.reducer;