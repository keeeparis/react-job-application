import { call, put, takeEvery } from "@redux-saga/core/effects"
import { getCatsFailure, getCatsSuccess } from "../features/counter/catSlice"

function* catSagaWorker(params: any): Generator<any, any, any> {
    try {
        const cats: Response = yield call(() => fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=${params.payload}`))
        const formattedCats = yield cats.json()
        yield put(getCatsSuccess(formattedCats))
    } catch (e) {
        yield put(getCatsFailure())
    }
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', catSagaWorker)
}

export default catSaga