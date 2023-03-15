
import './App.css';
import About from './component/About/About';
import Choice from './component/Choice/Choice';
import Counting from './component/Counting/Counting';
import Features from './component/Features/Features';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Menu from './component/Menu/Menu';

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
    </div>
  );
}

export default App;
