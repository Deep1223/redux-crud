import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../todomethod/todomethod';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});


export default store;

