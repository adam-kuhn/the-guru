import React from 'react'
import request from 'superagent'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: ''
    }
    this.getQuestion = this.getQuestion.bind(this)
    this.sendQuestion = this.sendQuestion.bind(this)
  }
  getQuestion (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  sendQuestion () {
    request
      .post('/api/v1/responses')
      .set('Content-Type', 'application/json')
      .send(this.state)
      .then(result => {
        this.props.display(result.body.resp)
        console.log(result.body)
      })
  }
  render () {
    return (
      <div>
        <form>
          <label>What would you like to know?
            <input type='text' name='question' onChange={this.getQuestion} />
          </label>
          {/* add onClick */}
          <button type='button' onClick={this.sendQuestion}>Submit Your Question</button>
        </form>
      </div>
    )
  }
}

export default Question
