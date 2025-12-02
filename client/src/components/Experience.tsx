import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

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

export default function Experience() {
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
