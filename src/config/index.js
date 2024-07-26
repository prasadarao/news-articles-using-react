export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const RESET_ARTICLES = 'RESET_ARTICLES';
export const SEARCH_ARTICLES = 'SEARCH_ARTICLES';
export const SEARCH_ARTICLES_SUCCESS = 'SEARCH_ARTICLES_SUCCESS';
export const SEARCH_ARTICLES_FAILURE = 'SEARCH_ARTICLES_FAILURE';
export const RESET_SEARCH_ARTICLES = 'RESET_SEARCH_ARTICLES';

export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';
export const PAGE_LIMIT = 10;
export const SEARCH_LIMIT = 30;
export const DESCRIPTION_LIMIT = 50;

export const articleRoutes = [
    { path: "/", key: "general", category: "general"},
    { path: "/categories/general", key: "general", category: "general" },
    { path: "/categories/business", key: "business", category: "business" },
    { path: "/categories/sports", key: "sports", category: "sports" },
    { path: "/categories/science", key: "science", category: "science" },
    { path: "/categories/health", key: "health", category: "health" },
    { path: "/categories/entertainment", key: "entertainment", category: "entertainment" },
    { path: "/categories/technology", key: "technology", category: "technology" }
];

export const navLinks = [
    { nav: "Home", page: "/" },
    { nav: "General", page: "/categories/general" },
    { nav: "Business", page: "/categories/business" },
    { nav: "Sports", page: "/categories/sports" },
    { nav: "Science", page: "/categories/science" },
    { nav: "Health", page: "/categories/health" },
    { nav: "Entertainment", page: "/categories/entertainment" },
    { nav: "Technology", page: "/categories/technology" },
];

export const noFound = 'No Results Found'
export const lastUpdate = (published) =>
  `${published}`;

export const BASE_URL = 'https://newsapi.org/v2/';
export const ARTICLES_URL = `${BASE_URL}top-headlines`;
export const SEARCH_URL = `${BASE_URL}everything`
