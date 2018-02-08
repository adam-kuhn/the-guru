import React from 'react'

class Question extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>What would you like to know?
             {/*add onChange  */}
            <input type='text' />
          </label>
          {/* add onClick */}
          <button type='button'>Submit Your Question</button>
        </form>
      </div>
    )
  }
}

export default Question