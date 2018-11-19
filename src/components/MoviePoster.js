import React from 'react';

export default function MoviePoster(props) {
  const url = 'http://image.tmdb.org/t/p/w342/';
  return (
    <div className="Movie" onClick={props.onClick}>
      <img src={url + props.movie.poster_path} />
    </div>
  )
}
