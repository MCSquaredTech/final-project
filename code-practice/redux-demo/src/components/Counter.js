import React from 'react'
import CardBody from './CardBody';

const Counter = () => {
  return (
    <div className='card text-center'>
        <div className='card-header bg-primary text-white'>
            Click Counter!
        </div>
        <CardBody />
    </div>
  );
}

export default Counter;

