import './App.css';

import { Header } from './components/Header';
import { BannerBackground } from './components/Banner';
import { About } from './components/AboutInfo';
import { PlansApp } from './components/Plans';
import { MyPlans } from './components/MyPlans';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerBackground />
      <About />
      <PlansApp />
      <MyPlans />
    </div>
  );
}

export default App;
