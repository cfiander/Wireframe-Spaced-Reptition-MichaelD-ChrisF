import React from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Registration from './RegistrationPage'
import LearningPage from './LearningPage'
import WrongAnswerPage from './WrongAnswerPage'
import CorrectAnswerPage from './CorrectAnswerPage'

function App() {
  
  return (
    <div>
      <header>
      <h1>Spaced Reptition</h1></header>
    <nav>
        <ul className="navList">
            <li>
                <Link to={`/SignUp`}>Sign Up</Link>
            </li>
            <li>
                <Link to={`/Login`}>Login</Link>
            </li>
        </ul>
    </nav>
            
    <main>
          <Route
            exact path="/"
            component={Dashboard}
          />
          <Route 
            exact path='/Signup'
            component={Registration}
          />
          <Route 
            exact path='/LearningPage'
            component={LearningPage}
          />
          <Route 
            exact path='/WrongAnswer'
            component={WrongAnswerPage}
          />
          <Route 
            exact path='/CorrectAnswer'
            component={CorrectAnswerPage}
          />
          <Route 
            exact path='/Login'
            component={Login}
          />
    </main>
    <footer>Footer</footer>
    </div>
  );
}

export default App;
