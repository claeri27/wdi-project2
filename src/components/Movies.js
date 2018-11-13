import React from 'react';

export default function Movies(props) {
  return (
    <div className="Movie">
      <h2>{props.results.title}</h2>
    </div>
  )
}
