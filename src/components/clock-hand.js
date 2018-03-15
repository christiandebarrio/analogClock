import React from 'react'

const ClockHand = props => {
  const rotation =
    props.type === 'hour' ? props.value / 12 * 360 : props.value / 60 * 360
  const myStyle = {
    transform: `rotate(${rotation}deg)`
  }
  const myClassName = `clock-hand-${props.type}`
  return <span className={myClassName} style={myStyle || {}} />
}

export default ClockHand
