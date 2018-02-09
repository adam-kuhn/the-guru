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
    this.displayResult = this.displayResult.bind(this)
  }

  displayResult (result) {
    this.setState({
      response: result
    })
  }
  
  render () {
    return (
      <div className="page">
        <h1 className="header">The Great All Knowing Guru</h1>
        <Question display={this.displayResult}/>
        <p>{this.state.response}</p>
      </div>
    )
  }
}

export default App
