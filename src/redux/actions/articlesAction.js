import {
    FETCH_ARTICLES, 
    FETCH_ARTICLES_SUCCESS, 
    FETCH_ARTICLES_FAILURE,
    RESET_ARTICLES, 
    SET_FILTER, SET_SORT} from './../../config'

export const fetchArticles = (query) => ({
    type: FETCH_ARTICLES,
    query
})

export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles,
});
  
export const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: error,
});

export const resetArticles = () => ({
    type: RESET_ARTICLES,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});
  
export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});



