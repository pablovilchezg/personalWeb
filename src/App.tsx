import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <h2>Juan Pablo Sáez (Zenid) here</h2>
      <div className="card">
        <p>
        I love Linux, the cloud ecosystem and electronics. <br/>
        Currently following the DevOps path 🎋.
        </p>
      </div>


        <a href="https://www.linkedin.com/in/juanpablosaezgutierrez/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/Zenidd" target="_blank">
          <img src={githubLogo} className="logo react" alt="Github logo" />
        </a>
      <p className="read-the-docs">
        Visit my LinkedIn and GitHub profiles
      </p>
      <button onClick={() => setCount((count) => count + 1)}>
          Hit me {count}
        </button>

    </>
  )
}

export default App
