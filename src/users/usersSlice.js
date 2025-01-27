import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usersList: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersListReceived: (state, action) => {
            state.usersList.push(action.payload.usersList)
        }
    },
})

// Action creators are generated for each case reducer function
export const { createSlice } = usersSlice.actions;

export default usersSlice.reducer;