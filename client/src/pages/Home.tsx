import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Code2, ArrowRight, Github, Linkedin, Twitter, 
  Layout, Server, Database, Terminal, Briefcase, Calendar, 
  ExternalLink, Mail, MapPin, Send, Heart 
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Assets
import heroBg from '@assets/generated_images/abstract_dark_technology_gradient_background_with_subtle_grid_lines.png';

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter hover:text-primary transition-colors">
            <Code2 className="w-8 h-8 text-primary" />
            <span>DEV.PORTFOLIO</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
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

function Skills() {
  const skills = [
    { name: 'Frontend', icon: Layout, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'Go'] },
    { name: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
    { name: 'DevOps', icon: Terminal, items: ['Docker', 'AWS', 'CI/CD', 'Git'] },
  ];

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and technologies I use to build high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2024 - Present",
      description: "Leading the development of a SaaS platform used by 10k+ users. Implemented microservices architecture using Node.js and Docker.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      role: "Junior Web Developer",
      company: "Creative Digital Agency",
      period: "2023 - 2024",
      description: "Collaborated with designers to translate Figma designs into responsive web interfaces. Optimized site performance improving LCP by 40%.",
      technologies: ["Vue.js", "Tailwind", "Firebase"]
    },
    {
      id: 3,
      role: "Frontend Intern",
      company: "StartUp Hub",
      period: "2022 - 2023",
      description: "Assisted in building the MVP of a fintech application. Learned and applied modern React patterns and state management.",
      technologies: ["React", "Redux", "SASS"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-muted-foreground">My professional journey in the tech industry.</p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1/2 ring-4 ring-background z-10 mt-1.5"></div>

              <div className="flex-1"></div>
              
              <div className="flex-1 pl-12 md:pl-0">
                <div className="glass-card p-8 rounded-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-accent mb-3">{exp.company}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-background border border-white/5 text-foreground/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time sales tracking, inventory management, and customer insights.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with drag-and-drop interfaces, real-time updates via WebSockets, and team workspaces.",
      tags: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "A SaaS application leveraging OpenAI's API to help marketers generate blog posts, social media captions, and ad copy instantly.",
      tags: ["TypeScript", "OpenAI API", "Stripe", "React Query"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      demoLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects that demonstrate my ability to solve complex problems.
            </p>
          </div>
          <a href="#" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View Github <Github className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href={project.repoLink} className="p-2 bg-background/80 backdrop-blur rounded-full hover:text-primary transition-colors" title="View Code">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demoLink} className="p-2 bg-background/80 backdrop-blur rounded-full hover:text-primary transition-colors" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useToast();
  
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, let's chat.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Me</h4>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, CA (Open to Remote)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-6">
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Portfolio. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by a Developer.
        </p>
      </div>
    </footer>
  );
}

// --- Main Component ---

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
