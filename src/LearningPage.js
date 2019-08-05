import React from 'react'
import { Link } from 'react-router-dom'

export default function LearningPage(props) {
    return (
        <div>
        <h4>Translate the word</h4>
        <form
          className='QuizForm'
        >
            <label htmlFor='quiz-input'>
            "What's the translation for this word?"

            </label>
            <input 
              type="text"
              id='quiz-input'
              name='quiz-input'
            />
            <button><Link to={`/CorrectAnswer`}>(Right Answer)</Link></button>
            <button><Link to={`/WrongAnswer`}>(Wrong Answer)</Link></button>
            <p>You have answered the current word correctly X times</p>
            <p>Total Score</p>
        </form>
        </div>
    )
}