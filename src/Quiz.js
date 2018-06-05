import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quiz_position: 1,
      array: quizData.quiz_questions
    }
  }
  render () {
    let question = this.state.array[this.state.quiz_position].instruction_text
    return (
      <div>
        <div className='QuizQuestion'>{question}</div>
      </div>
    )
  }
}

export default Quiz
