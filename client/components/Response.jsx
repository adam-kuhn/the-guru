import React from 'react'
import Sound from 'react-sound'
import {Shake} from 'reshake'

const Response = (props) => {
  return (
    <div className='eightballdiv'>
      <Sound url="/sounds/Yoda.m4a" playStatus={Sound.status.PLAYING} />
      <Shake
        h={24}
        v={15}
        r={0}
        dur={150}
        int={3.7}
        max={21}
        fixed={false}
        fixedStop={false}
        freez={false}>
        <img src='../images/8-ball.png' className="eightBall"/>
      </Shake>
      <img src='../images/galaxy-animation.gif' className="galaxy"/>
      <p className="response">{props.result}</p>
    </div>
  )
}

export default Response
