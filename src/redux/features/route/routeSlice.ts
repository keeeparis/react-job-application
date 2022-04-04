import { createSlice } from "@reduxjs/toolkit"

import { routeState } from "./types"

const initialState: routeState = {
    routes: [],
    currentRoute: {
        id: 999,
        key: '999',
        from: 'Point A',
        to: 'Point C',
    },
    isLoading: false,
    status: 'idle'
}

export const routeSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setCurrentRoute: (state, action) => {
            const route = state.routes.filter(route => route.key === action.payload)[0]
            state.currentRoute = route
        },
        setRoutes: (state, action) => {
            state.routes = action.payload
        },
        updateRoute: (state, action) => {
            // find route by id
            const route = state.routes.filter(route => route.id === action.payload.id)[0]
            // compare previous value (record) with current route 'from' and 'to' values
            // if they are the same, it means we are changing current select
            // if not, it must be another select
            if (route.from === action.payload.record) {
                route.from = action.payload.value
            } else {
                route.to = action.payload.value
            }
        }
    }
})

export const { setCurrentRoute, updateRoute, setRoutes } = routeSlice.actions

export default routeSlice.reducer