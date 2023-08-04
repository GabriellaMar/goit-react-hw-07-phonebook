
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "redux/slice.js/contactsSlice";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter(state, action){
            state.filter = action.payload
        }
    }

})



export const {setFilter} =filterSlice.actions;
export const  filterReducer =filterSlice.reducer;

// export const filterReducer = (state = initialState.filter, action) => {
//     switch (action.type) {
//         case 'filter/setFilter':
//             return action.payload;
//         default:
//             return state;
//     }

// }


//  export const filterAction = ({value})=>({ type: 'filter/setFilter', payload: value })