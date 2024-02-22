import logo from "./logo.svg"
import "./App.css"
import Userlist from "./components/Userlist"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Userdetails from "./components/Userdetails"

function App() {
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Userlist />}></Route>
          <Route path="/:id" element={<Userdetails/>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
