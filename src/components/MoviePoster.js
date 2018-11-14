import React from 'react';

export default function MoviePoster(props) {
  const url = 'http://image.tmdb.org/t/p/w342/';
  return (
    <div className="Movie" onClick={props.onClick}>
      {/* <h2>{props.movie.title}</h2> */}
      {/* <p>{props.movie.release_date}</p> */}
      <img src={url + props.movie.poster_path} />
      {/* <p>{props.movie.overview}</p> */}
    </div>
  )
}
