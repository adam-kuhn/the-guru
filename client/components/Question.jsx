import React from 'react'

class Question extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.getQuestion = this.getQuestion.bind(this)
  }
  getQuestion(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <label>What would you like to know?
             {/*add onChange  */}
            <input type='text' name='question' onChange={this.getQuestion} />
          </label>
          {/* add onClick */}
          <button type='button'>Submit Your Question</button>
        </form>
      </div>
    )
  }
}

export default Question