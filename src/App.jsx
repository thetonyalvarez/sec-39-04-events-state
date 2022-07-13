import { useState } from 'react'
import logo from './8ball.jpg'
import Container from '@mui/material/Container';
import Eightball from './Eightball'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Container sx={{my:4}}>
          <Eightball/>
        </Container>
      </main>
    </div>
  )
}

export default App
