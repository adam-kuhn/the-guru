import React from 'react'

const Response = (props) => {
  return (
    <div className='eightballdiv'>
      <img src='../images/8-ball.png' className="eightBall"/>
      <p className="response">{props.result}</p>
    </div>
  )
}

export default Response
