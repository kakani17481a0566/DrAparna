import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Glamour from './components/Glamour';
import Vision from './components/Vision';
import Milestones from './components/Milestones';
import JourneySections from './components/JourneySections';
import DigitalCard from './components/DigitalCard';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="font-lato antialiased bg-slate-50 text-dr-text-dark scroll-smooth">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Glamour />
                <Vision />
                <Milestones />
                <JourneySections />
              </>
            } />
            <Route path="/vision" element={<Vision />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/digital-card" element={<DigitalCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
