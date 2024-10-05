
import './App.css'
import Customize from './pages/Customize'
// import Home from './pages/Home'
import CanvasFrame from './Canvas'
function App() {

  return (
  <main className='app transition-all ease-in'>
    {/* <Home /> */}
    <CanvasFrame />
    <Customize />
  </main>
  )
}

export default App
