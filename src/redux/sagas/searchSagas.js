import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { SEARCH_ARTICLES, SEARCH_URL, SEARCH_LIMIT } from './../../config'
import {
    searchArticlesSuccess,
    searchArticlesFailure,
} from '../actions/searchAction';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

function* searchArticlesSaga(query) {
    try {
        const response = yield call(axios.get, `${SEARCH_URL}?q=${query.query}&apiKey=${API_KEY}&pageSize=${SEARCH_LIMIT}`);
        yield put(searchArticlesSuccess(response.data.articles, query.query));
    } catch (error) {
        yield put(searchArticlesFailure(error.message));
    }
}

export default function* watchSearchSagas() {
    yield takeLatest(SEARCH_ARTICLES, searchArticlesSaga);
}
