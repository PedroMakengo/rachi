import './App.css';

import { Header } from './components/Header';
import { BannerBackground } from './components/Banner';
import { About } from './components/AboutInfo';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerBackground />
      <About />
    </div>
  );
}

export default App;
