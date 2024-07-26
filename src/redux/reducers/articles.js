import { 
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  RESET_ARTICLES,
  SET_FILTER, 
  SET_SORT } from './../../config'

const initialState = {
  articles: [],
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
  filter: '',
  sort: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { 
        ...state, 
        loading: true, 
        error: null 
      };
    case FETCH_ARTICLES_SUCCESS:
      return { 
        ...state, 
        articles: [...state.articles, ...action.payload],
        page: state.page + 1,
        hasMore: action.payload.length > 0,
        loading: false
      };
    case FETCH_ARTICLES_FAILURE:
      return { 
        ...state, 
        loading: false, 
        hasMore: false,
        error: action.payload 
      };
    case RESET_ARTICLES:
      return { ...initialState };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default articleReducer;
