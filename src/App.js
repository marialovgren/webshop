import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

// page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Handmade handbags</h1>
        </nav>

		<Route path="/">
			<Home />
		</Route>

		<Route path="/about">
			<About />
		</Route>

		<Route path="/contact">
			<Contact />
		</Route>
		
      </BrowserRouter>
    </div>
  );
}

export default App
