import './App.css';
import Navbar from './Components/Navbar';
import Communinty from './Components/community/Communinty';
import Build from './Components/build/Build';
import RoadMap from './Components/roadmap/RoadMap';
import RoadMapNest from './Components/roadmap/RoadMapnest/RoadMapNest';
import About from './Components/About/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Subfooter from './Components/Subfooter';



function App() {
  return (
    <div >
      <BrowserRouter>

      <Navbar />
      <Routes>
      <Route path='/' element={<About />} />
      <Route path='/build' element={<Build />} />
      <Route path='/roadmap' element={<RoadMap />} />
      <Route path='/liveroadmap' element={<RoadMapNest />} />
      <Route path='/community' element={<Communinty />} />

    </Routes>
    <Footer />
    <Subfooter />
    </BrowserRouter>

    
    </div>
  );
}

export default App;
