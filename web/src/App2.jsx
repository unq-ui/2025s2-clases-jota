import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import App from './App'
import About from './About.jsx'
import Pokemon from './Pokemon.jsx'

function App2() {
  return (
    <BrowserRouter>
      <div>
        <h1>App Router</h1>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:pokemonName" element={<Pokemon />} />
        <Route path="ditto" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App2;
