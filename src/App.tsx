import Header from './components/Header';
import Hero from './components/Hero';
import Infrastructures from './components/Infrastructures';
import PlanDeMasse from './components/PlanDeMasse';
import Atouts from './components/Atouts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <div className="bg-studio-bg font-sans selection:bg-studio-highlight selection:text-white scroll-smooth min-h-screen text-studio-ink">
      {/* Premium floating Header navigation */}
      <Header />

      {/* Main visual segments hierarchy layout */}
      <main>
        {/* Hero Section */}
        <div id="vision">
          <Hero />
        </div>

        {/* Infrastructures d'Exception */}
        <div id="grands-projets">
          <Infrastructures />
        </div>

        {/* Interactive Master Plan */}
        <PlanDeMasse />

        {/* Atouts & Gallery */}
        <div id="atouts">
          <Atouts />
        </div>

        {/* Official Lead/Callback capture */}
        <Contact />
      </main>

      {/* Brand Luxury footer */}
      <Footer />

      {/* Floating AI Virtual Concierge */}
      <AIAssistant />
    </div>
  );
}
