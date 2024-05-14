import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Goals from './Components/Goals/Index';
import Page1 from './Scenes/Page1.jsx';
import Navbar from './Components/Navbar/Index';
import UpperBar from './Components/UpperBar/Index.jsx';
import Page2 from './Scenes/Page2.jsx';
import Page3 from './Scenes/Page3.jsx';
import Page4 from './Scenes/Page4.jsx';
function App() {

  return (
<div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UpperBar/> } />
            <Route
              path="/page2"
              element={<Page2/>}
            />
            <Route
              path="/page3"
              element={<Page3/>}
            />
            <Route
              path="/page4"
              element={<Page4/>}
            />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
