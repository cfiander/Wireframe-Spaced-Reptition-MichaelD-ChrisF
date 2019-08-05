import React from 'react'

export default function Login(props) {
    return (
        <form
          className='LoginForm'
        >
          <div role='alert'>
          </div>
          <div>
            <label htmlFor='login-username-input'>
              Username
            </label>
            <input
              id='login-username-input'
              name='username'
            />
          </div>
          <div>
            <label htmlFor='login-password-input'>
              Password
            </label>
            <input
              id='login-password-input'
              name='password'
              type='password'
            />
          </div>
          <button type='submit'>
            Login
          </button>
        </form>
    )
}