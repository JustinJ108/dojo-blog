import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails.jsx';
import NotFound from './NotFound.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>
    <div className="card">
        <Navbar />

        <div className = "content">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

        </div>
      </div>
  </Router>
      
    </>
  )
}

export default App
