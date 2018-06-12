import React, { Component } from 'react'
import './App.css'
import './styles/main.css'
import Header from './containers/header'
import Footer from './components/footer'
import Container from './components/container'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Header />
          <Container />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
