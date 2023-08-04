import React from 'react'

const CardBody = () => {
  return (
    <>
      <div className="card-body">
        <p className="card-text">Click Count: </p>
        <button className="btn btn-primary">Increment</button>{" "}
        <button className="btn btn-danger">Decreament</button>
      </div>
    </>
  )
}

export default CardBody;
