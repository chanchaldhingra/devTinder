import './App.css'
import Body from './Body'
import { BrowserRouter, Routes, Route } from "react-router"
import Profile from './Profile'
import Login from './Login'

function App() {

  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
