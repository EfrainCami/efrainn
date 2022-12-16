import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <About></About>
      <ExperienceCard></ExperienceCard>
    </div>
  );
}

export default App;
