import React, { Component } from 'react'

export class QuizQuestionButton extends Component {
  render () {
    return (

      <button>
        {this.props.button_text}
      </button>

    )
  }
}
