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
      <main>
        <About />
        <PlansApp />
        <MyPlans />
        <Contact />
      </main>

      <footer>
        <p>Rachi - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
