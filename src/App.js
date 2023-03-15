
import './App.css';
import About from './component/About/About';
import Choice from './component/Choice/Choice';
import Counting from './component/Counting/Counting';
import Features from './component/Features/Features';
import Gallery from './component/Gallery/Gallery';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Menu from './component/Menu/Menu';
import Offer from './component/Offer/Offer';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Choice/>
      <Counting/>
      <Gallery/>
      <Offer/>
    </div>
  );
}

export default App;
