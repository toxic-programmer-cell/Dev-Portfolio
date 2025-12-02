import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, Terminal, Cpu, Globe, Layers } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Layout, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'Go'] },
  { name: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { name: 'DevOps', icon: Terminal, items: ['Docker', 'AWS', 'CI/CD', 'Git'] },
];

export default function Skills() {
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
