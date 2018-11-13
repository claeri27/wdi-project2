import React from 'react';

export default function MovieForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className='input'>
        <input type='text' onChange={props.onChange} value={props.input}/>
        <input type='submit' value="Submit!"/>
      </div>
    </form>
  )
}
