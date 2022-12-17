import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import image1 from "./img/massage.jpg";
import image2 from "./img/diving.jpg";
import image3 from "./img/wedding.jpg";
import image4 from "./img/aquapark.jpg";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <About></About>
      <div className='experience-container'>
        <ExperienceCard imageSrc={image1}></ExperienceCard>
        <ExperienceCard imageSrc={image2}></ExperienceCard>
        <ExperienceCard imageSrc={image3}></ExperienceCard>
        <ExperienceCard imageSrc={image4}></ExperienceCard>
        
      </div>
    </div>
  );
}

export default App;
