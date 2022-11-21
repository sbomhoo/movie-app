import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import React from 'react';
import styles from "./Movies.module.css";

function Movie({coverImg, id, title, year, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title} ({year})</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary }</p>
                <hr/>
                <ul className={styles.movie__genres}>
                    {genres.map(g => 
                        <li key={g}>{g}</li>
                    )}
                </ul>
            </div>
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