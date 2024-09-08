
import './App.css'
import Canvas from './Canvas'
import Customize from './pages/Customize'
import Home from './pages/Home'

function App() {

  return (
  <main className='app transition-all ease-in'>
    <Home />
    <Canvas />
    <Customize />
  </main>
  )
}

export default App
