import {
    SEARCH_ARTICLES, 
    SEARCH_ARTICLES_SUCCESS, 
    SEARCH_ARTICLES_FAILURE,
    RESET_SEARCH_ARTICLES
} from './../../config'

export const searchArticles = (query) => ({
    type: SEARCH_ARTICLES,
    query
})

export const searchArticlesSuccess = (articles, query) => ({
    type: SEARCH_ARTICLES_SUCCESS,
    payload: { articles, query }
});
  
export const searchArticlesFailure = (error) => ({
    type: SEARCH_ARTICLES_FAILURE,
    payload: error,
});

export const resetSearchArticles = () => ({
    type: RESET_SEARCH_ARTICLES,
});

