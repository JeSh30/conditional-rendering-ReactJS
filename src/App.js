import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="Rajesh" />
        {isLoggedIn ? (
          <button type="button">Login</button>
        ) : (
          <button type="button">Logout</button>
        )}
        {/* Used Ternary Operator */}
      </div>
    )
  }
}

export default App
