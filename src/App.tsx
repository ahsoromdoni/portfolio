import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import TerminalContact from './components/TerminalContact';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-primary">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] bg-accent/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vh] bg-accent/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:px-12 flex flex-col gap-32 pb-32">
        <Navbar />

        <main className="flex flex-col gap-48">
          <Hero />
          <Projects />
          <Methodology />
          <TerminalContact />
        </main>
      </div>
    </div>
  );
}

export default App;
