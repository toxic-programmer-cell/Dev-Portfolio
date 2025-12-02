import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

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

export default function Projects() {
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
