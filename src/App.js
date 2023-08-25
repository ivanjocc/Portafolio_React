import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import BreedList from './components/BreedList';
import Toolbox from './components/ToolBox';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <BreedList />
      <Toolbox />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
