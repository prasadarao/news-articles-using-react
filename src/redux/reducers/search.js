import { 
  SEARCH_ARTICLES,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_FAILURE,
  RESET_SEARCH_ARTICLES,
} from './../../config'

const initialState = {
  articles: [],
  query: '',
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return { 
        ...state, 
        loading: true, 
        error: null 
      };
    case SEARCH_ARTICLES_SUCCESS:
      return { 
        ...state, 
        articles: action.payload.articles,
        query: action.payload.query,
        loading: false
      };
    case SEARCH_ARTICLES_FAILURE:
      return { 
        ...state,
        loading: false, 
        error: action.payload 
      };
    case RESET_SEARCH_ARTICLES:
      return { ...initialState };
    default:
      return state;
  }
};

export default searchReducer;
