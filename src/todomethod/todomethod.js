import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoData: [],
}

const todomethod = createSlice({
        name: 'todo',
        initialState,
        reducers:
        {
            addMethod: (state, action) => {
                state.todoData.push(action.payload);
            }, 
            editdata: (state, action) => {
                const index= state.todoData.findIndex(item => item.id === action.payload.id);
                if(index>=0){
                    state.todoData[index]=action.payload;
                }
            },
            deletedata: (state, action) => {
                state.todoData = state.todoData.filter(item => item.id !== action.payload);
            },
            setdata: (state, action) => {
                state.todoData = action.payload;
            }
        }
});

export const { addMethod, editdata, deletedata, setdata } = todomethod.actions;

export default todomethod.reducer;
