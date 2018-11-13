import React from 'react';
import Movies from './Movies';

export default function MovieList(props) {
  return (
    <div className='MovieList'>
      {props.movies.map(movie =>
        <Movies
          key={movie.id}
          movie={movie}
          title={movie.title}
          overview={movie.overview}
        />)}
    </div>
  )
}
