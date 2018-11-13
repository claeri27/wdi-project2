import React from 'react';

export default function Movies(props) {
  return (
    <div className="Movie">
      <h2>{props.movie.title}</h2>
      <p>{props.movie.overview}</p>
    </div>
  )
}
