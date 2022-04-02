import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'
import counterReducer from '../features/counter/catSlice'
import catSaga from '../saga/catSaga'

const saga = createSagaMiddleWare()

export const store = configureStore({
    reducer: {
        cats: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})
saga.run(catSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch