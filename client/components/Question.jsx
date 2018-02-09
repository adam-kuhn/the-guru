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

  sendQuestion (e) {
    e.preventDefault()
    let question = this.state.question
    let words = question.split(' ')
    let word = words[0].toLowerCase()
    let qWords = ['who', 'what', 'how', 'when', 'where', 'will', 'why']
    if (qWords.includes(word)) {
      request
        .post('/api/v1/responses')
        .set('Content-Type', 'application/json')
        .send({word})
        .then(result => {
          this.props.display(result.body.resp)
        })
    } else { this.props.display('Computer says noo....') }
  }
  render () {
    return (
      <div>
        <form className='form' onSubmit={this.sendQuestion}>
          <label>What would you like to know?  </label>
          <input type='text' name='question' onChange={this.getQuestion} />
          <button>Submit Your Question</button>
        </form>
      </div>
    )
  }
}

export default Question
