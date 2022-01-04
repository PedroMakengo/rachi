import './App.css';

import { Header } from './components/Header';
import { BannerBackground } from './components/Banner';
import { About } from './components/AboutInfo';
import { PlansApp } from './components/Plans';
import { MyPlans } from './components/MyPlans';
import { Contact } from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerBackground />
      <About />
      <PlansApp />
      <MyPlans />
      <Contact />
    </div>
  );
}

export default App;
