import React from 'react'
import { connect } from 'react-redux'
import ClockSphere from 'components/clock-sphere'
import ClockHand from './components/clock-hand'

export const timer = (state = { clock: Date.now() }, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { clock: Date.now() }
    default:
      return state
  }
}

class App extends React.Component {
  componentDidMount() {
    this.setMyInterval()
  }
  componentWillUnmount() {
    this.clearMyInterval
  }
  setMyInterval() {
    this.myInterval = setInterval(
      () => this.props.dispatch({ type: 'UPDATE_TIME' }),
      1000
    )
  }
  clearMyInterval() {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div className="clock">
        <ClockSphere />
        <ClockHand type="hour" value={this.props.hours} />
        <ClockHand type="minute" value={this.props.minutes} />
        <ClockHand type="second" value={this.props.seconds} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const date = new Date(state.timer.clock)
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours() + minutes / 60
  return { hours, minutes, seconds }
}

export default connect(mapStateToProps)(App)
