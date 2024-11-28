import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'


const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(existingItem){
                Swal.fire({
                    title: "Item already in cart",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                  })
            }else{
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added to cart successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        },
        removeCart : (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart : (state) => {
            state.cartItems = []
        }
    }
})

export const {addToCart, removeCart, clearCart} = cartSlice.actions
export default cartSlice.reducer;

