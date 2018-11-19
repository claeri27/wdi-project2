import React from 'react';

export default function MovieForm(props) {
  return (
    <form onClick={props.onClick}>
      <input className='input' type='text' onChange={props.onChange} value={props.input} placeholder='Search...'/>
    </form>
  )
}
