import React from 'react'
import Question from './Question'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      question: '',
      word: '',
      response: ''
    }
  }
  render () {
    return (
      <div className ="page">
        <h1 className="header">The Great All Knowing Guru</h1>
        <Question />
      </div>
    )
  }
}

export default App
