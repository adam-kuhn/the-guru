import React from 'react'
import Question from './Question'
import Response from './Response'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      response: '',
      showResponse: false
    }
    this.displayResult = this.displayResult.bind(this)
  }

  displayResult (result) {
    this.setState({
      response: result,
      showResponse: true
    })
  }

  render () {
    return (
      <div className="page">
        <h1 className="header">The Great All Knowing Guru</h1>
        <Question display={this.displayResult}/>
        {this.state.showResponse && <Response result = {this.state.response} />}
      </div>
    )
  }
}

export default App
