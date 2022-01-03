import './App.css';

import { Header } from './components/Header';
import { BannerBackground } from './components/Banner';
import { About } from './components/AboutInfo';
import { PlansApp } from './components/Plans';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerBackground />
      <About />
      <PlansApp />
    </div>
  );
}

export default App;
