import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import MyFooter from './components/MyFooter'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Services></Services>
    <About></About>
    <Products></Products>
    <Blog></Blog>
    <NewsLetter />
    <MyFooter/>
        </>
  )
}

export default App
