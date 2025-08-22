import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import ProductCards from './components/ProductCards';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Comentario from './components/Comentarios'; // Assuming you have a Download icon component


function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <AnimatedSection>
        <ProductCards />
      </AnimatedSection>
      <AnimatedSection>
        <Comentario />
      </AnimatedSection>
      <AnimatedSection>
        <Guarantee />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;