
import './App.css';
import About from './component/About/About';
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
    </div>
  );
}

export default App;
