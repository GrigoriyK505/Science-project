import './App.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Calculate from './components/Calculate/Calculate.jsx';
import Footer from './components/Footer/Footer.jsx';
import Survey from './components/Survey/Survey.jsx';
const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Survey />
      <Calculate />
      <Footer />
    </div>
  )
}

export default App;
