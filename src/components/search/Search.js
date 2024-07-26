import React, { useEffect, useState } from 'react'
import { useDispatch, connect} from  'react-redux'
import { useParams } from 'react-router-dom'
import { withRouter } from './../../withRouter'
import { v4 as uuidv4 } from 'uuid'
import { Col } from 'react-bootstrap'

import { searchArticles, resetSearchArticles } from './../../redux/actions/searchAction'
import NewsCard from "./../news/NewsCard"
import { noFound } from './../../config'

function Search(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [totalArticles, setTotalArticles] = useState(0);
    const { query } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchArticles(query));

        // Clean up function to reset articles if necessary
        return () => {
            dispatch(resetSearchArticles());
        }
    }, [query, dispatch]);

    useEffect(() => {
        setSearchQuery(query);
        setTotalArticles(props.articles.length);
    }, [query, props.articles])

    return (
        <>
            {props.loading ? (
                <h4 className='dataloader'>Fetching data...</h4>
        ) : (
            <>
                <h1 className="header">{totalArticles === 0 ? noFound : `Search results for '${searchQuery}'`}</h1>
                <div className="container">
                    <div className="row">
                        {props.articles && props.articles.map((element) => {
                            return (
                                <Col sm={12} md={6} lg={4} xl={3} key={uuidv4()} className="card-col">
                                    <NewsCard article={element} />
                                </Col>
                            );
                        })}
                    </div>
                </div>
            </>
        )}
        </>
    )
}


const mapStateToProps = (state) => ({
    articles: state.search.articles,
    loading: state.search.loading
})

const mapDispatchToProps = (dispatch) => ({
    searchArticles: (...args) => dispatch(searchArticles(...args))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))