import React from 'react'
import { Button, Card } from 'react-bootstrap'

import Details from './Details'
import { truncateString } from './../../utils/Utils'

function NewsCard(props) {
    const {article} = props

    return (
        <Card className="card">
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text className="card-description">{truncateString(article.description)}</Card.Text>
                <Details channel={article.source.name} published={article.publishedAt} />
                <Button
                    className="card-btn"
                    href={article.url}
                    target="_blank"
                >
                    Read more 
                </Button>
            </Card.Body>
        </Card>
    )
}

export default NewsCard