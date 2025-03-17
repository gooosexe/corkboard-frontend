import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './HomePage'
import PostForm from './PostForm'
import TOS from './TOS'
import Privacy from './Privacy'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/terms" element={<TOS />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
