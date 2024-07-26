import React from 'react'
import PropTypes from 'prop-types'
import { lastUpdate } from './../../config'

function Details(props) {
  const { channel, published } = props;

  return (
    <div className="details">
      <p className="channel">
        <span>Channel: </span>
        {channel}
      </p>
      <p className="published">
        <span>Published at: </span>
        {lastUpdate(published)}
      </p>
    </div>
  );
}

Details.propTypes = {
  channel: PropTypes.string,
  published: PropTypes.string,
};

export default Details;