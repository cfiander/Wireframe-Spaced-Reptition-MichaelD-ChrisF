import React from 'react'
import { Route, Link} from 'react-router-dom'

export default class Registration extends React.Component {
    render() {
    return (
        <div className="top">
            <section>
                <h2>Sign Up</h2>
                <p>"Practice learning a language with the spaced repetition technique."</p>
                <form
        onSubmit={this.handleSubmit}
      >
        <div>
          <label htmlFor='registration-name-input'>
            Enter your name
          </label>
          <input
            ref={this.firstinput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <label htmlFor='registration-username-input'>
            Choose a username
          </label>
          <input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <label htmlFor='registration-password-input'>
            Choose a password
          </label>
          <input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <footer>
          <button type='submit'>
            Sign up
          </button>
          {' '}
          <br>
          </br>
          <Link to='/Login'>Already have an account?</Link>
        </footer>
      </form>
            </section>

        </div>
    )
}
}