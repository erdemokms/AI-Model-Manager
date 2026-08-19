import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import AddModel from './pages/AddModel'
import Models from './pages/Models'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/models" element={<Models />} />
        <Route path="/add-model" element={<AddModel />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App