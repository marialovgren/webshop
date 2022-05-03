import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.css' 
import './App.css'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Item from './pages//item/Item'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route path="/about">
				<About />
			</Route>

			<Route path="/contact">
				<Contact />
			</Route>

			<Route path="/items/:id">
				<Item />
			</Route>

			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
