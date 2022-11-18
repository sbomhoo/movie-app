import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import React from 'react';

function Movie({coverImg, id, title, year, summary, genres}) {
    return (
        <div>
            <img src={coverImg} />
            <h2>
                <Link to={`/movie/${id}`}>{title} ({year})</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => 
                    <li key={g}>{g}</li>
                )}
            </ul>
            <hr />
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;