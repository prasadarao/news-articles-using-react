import { all } from 'redux-saga/effects'
import watchArticleSagas from './articleSagas'
import watchSearchSagas from './searchSagas'

export default function* rootSaga() {
  yield all([
    watchArticleSagas(),
    watchSearchSagas(),
  ]);
}