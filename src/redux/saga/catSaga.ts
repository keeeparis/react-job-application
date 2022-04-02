import { call, put, takeEvery } from "@redux-saga/core/effects"
import { getCatsFailure, getCatsSuccess } from "../features/counter/catSlice"

function* catSagaWorker(): Generator<any, any, any> {
    try {
        const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
        const formattedCats = yield cats.json()
        const formattedCatsShort = formattedCats.slice(0, 10)
        yield put(getCatsSuccess(formattedCatsShort))
    } catch (e) {
        yield put(getCatsFailure())
    }
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', catSagaWorker)
}

export default catSaga