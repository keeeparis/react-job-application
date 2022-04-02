import { createSlice } from "@reduxjs/toolkit"

interface catState {
    isLoading: boolean,
    cats: string[],
    status: 'idle' | 'updated'
}

const initialState: catState = {
    cats: [],
    isLoading: false,
    status: 'idle'
}

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCatsFetch: (state, action) => {
            state.isLoading = true
            state.status = 'updated'
        },
        getCatsSuccess: (state, action) => {
            state.cats = [...state.cats, ...action.payload]
            state.isLoading = false
        },
        getCatsFailure: (state) => {
            state.isLoading = false
        }
    }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions

export default catSlice.reducer