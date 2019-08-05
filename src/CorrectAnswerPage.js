import React from 'react'
import { Link } from 'react-router-dom'

export default function AnswerPage(props) {
    return (
        <div>
        <h4>"You were correct! :D"</h4>
        <p>The correct translation for original was answer and you chose guess!"</p>
        <button><Link to={`/LearningPage`}>Try Another Word!</Link></button>
        <p>Total Score: X</p>
        </div>
    )
}