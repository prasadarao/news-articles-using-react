import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_ARTICLES, ARTICLES_URL, PAGE_LIMIT } from './../../config'
import {
    fetchArticlesSuccess,
    fetchArticlesFailure,
} from '../actions/articlesAction';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

function* fetchArticlesSaga(action) {
    try {
        const page = yield select((state) => state.articles.page);
        const response = yield call(axios.get, `${ARTICLES_URL}?category=${action.query}&page=${page}&apiKey=${API_KEY}&pageSize=${PAGE_LIMIT}`);
        yield put(fetchArticlesSuccess(response.data.articles));
    } catch (error) {
        yield put(fetchArticlesFailure(error.message));
    }
}

export default function* watchArticleSagas() {
    yield takeLatest(FETCH_ARTICLES, fetchArticlesSaga);
}
