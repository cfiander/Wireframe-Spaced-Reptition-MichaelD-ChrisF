import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage(props) {
    return (
        <div>
            <section>
                <header>
                    <h2>Your Page</h2>
                    <h3>Mandarin</h3>
                </header>
                <Link to={`/LearningPage`}>Start Practicing</Link>
                <h4>Word to Practice</h4>
                <ul className="dashboard_list">
                    <li>
                        Word: Hello: Nǐhǎo (Nee how)
                        <br></br>
                        Corect Answer Count: 1
                        <br></br>
                        Incorrect Answer Count: 1000
                </li>
                <br></br>
                    <li>
                        Word: Hello: Thank you: Xièxiè (Shieh-shieh)
                        <br></br>
                        Corect Answer Count: 1
                        <br></br>
                        Incorrect Answer Count: 1000
                </li>
                <br></br>
                    <li>
                        Word: Hello: You're welcome: Bù kèqì (Boo kuh-chi)
                        <br></br>
                        Corect Answer Count: 1
                        <br></br>
                        Incorrect Answer Count: 1000
                </li>
                <br></br>
                    <li>
                        Word: Good morning: Zǎo (Zhow)
                        <br></br>
                        Corect Answer Count: 1
                        <br></br>
                        Incorrect Answer Count: 1000
                </li>
                <br></br>
                </ul>
            </section>
        </div>
    )
}