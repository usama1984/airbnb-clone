import './App.css'
import Home from './Home/Home'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SearchPage from './SearchPage/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Router>
        <Header />

        <Routes>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
