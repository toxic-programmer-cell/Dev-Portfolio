import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import heroBg from '@assets/generated_images/abstract_dark_technology_gradient_background_with_subtle_grid_lines.png';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Building <span className="text-gradient">Digital</span> <br />
            Experiences.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I craft robust, scalable, and beautiful web applications. With 1.5+ years of experience in the full software lifecycle, I turn complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group"
            >
              View Work 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract code visual or 3D element placeholder could go here */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="glass p-8 rounded-2xl border border-white/10 relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3 font-mono text-sm text-muted-foreground">
                <p><span className="text-primary">const</span> <span className="text-accent">developer</span> = <span className="text-white">{`{`}</span></p>
                <p className="pl-4">name: <span className="text-green-400">'Your Name'</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">'Full Stack Dev'</span>,</p>
                <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'TypeScript'</span>],</p>
                <p className="pl-4">hardWorker: <span className="text-primary">true</span></p>
                <p><span className="text-white">{`}`}</span>;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
