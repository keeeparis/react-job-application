import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'

import routeReducer from '../features/route/routeSlice'
import routeSaga from '../saga/routeSaga'

const saga = createSagaMiddleWare()

export const store = configureStore({
    reducer: {
        routes: routeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})
saga.run(routeSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch