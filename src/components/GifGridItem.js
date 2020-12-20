import { prototype } from 'enzyme-adapter-react-16';
import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
