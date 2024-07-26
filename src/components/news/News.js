import React, { useEffect } from 'react'
import { useDispatch, connect} from  'react-redux'
import { withRouter } from './../../withRouter'
import { Col, Alert } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import InfiniteScroll from 'react-infinite-scroll-component'

import { fetchArticles, resetArticles } from './../../redux/actions/articlesAction'
import NewsCard from "./NewsCard"
import { capitalizeString } from './../../utils/Utils'
import "./news.css"

function News(props) {
    const { category } = props;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArticles(category))

        // Clean up function to reset articles if necessary
        return () => {
            dispatch(resetArticles());
        }
    }, [dispatch])

    const fetchMoreData = (query) => {
        if (!props.dataloading && props.hasMore) {
            dispatch(fetchArticles(query));
        }
    };

    return (
        <>
            <h1 className="header">{`Top ${capitalizeString(category)} Headlines`}</h1>
            <div className="container">
                {props.error && <Alert key='danger' variant='danger'>{props.error}</Alert>}
                {props.articles && (
                <InfiniteScroll
                    dataLength={props.articles.length}
                    next={() =>{ fetchMoreData(category)}}
                    hasMore={props.hasMore}
                    loader={<h4 className='dataloader'>Fetching data...</h4>}
                    >  
                    <div className="row">
                        {props.articles && props.articles.map((element) => {
                            return (
                                <Col sm={12} md={6} lg={4} xl={3} key={uuidv4()} className="card-col">
                                    <NewsCard article={element} />
                                </Col>
                            );
                        })}
                        
                    </div>
                </InfiniteScroll>
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
    hasMore: state.articles.hasMore,
    dataloading: state.articles.loading,
    error: state.articles.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (...args) => dispatch(fetchArticles(...args))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(News))
//export default News