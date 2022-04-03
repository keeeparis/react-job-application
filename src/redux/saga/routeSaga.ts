import { call, put, takeEvery } from "@redux-saga/core/effects"
import { useAppSelector } from "../hooks"

function* routeSagaWorker(params: any): Generator<any, any, any> {
    const r = useAppSelector(state => state.routes.routes.filter(route => route.id === params.payload.id)[0])
    const cats: Response = yield call(() => fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=${params.payload}`))
    const formattedCats = yield cats.json()
    // yield put(getCatsSuccess(formattedCats))

}

function* routeSaga() {
    yield takeEvery('routes/updateRoutes', routeSagaWorker)
}

export default routeSaga