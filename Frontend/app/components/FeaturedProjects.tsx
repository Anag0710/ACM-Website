'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function FeaturedProjects() {
  const projects = [
    {
      title: "SightScope",
      description: "AI-powered accessibility tool generating descriptive text for images to assist visually impaired users.",
      tech: ["Python", "Computer Vision", "Web UI", "AI/ML"],
      category: "Accessibility",
      impact: "Helping 500+ users daily",
      github: "#",
      demo: "#"
    },
    {
      title: "Campus Connect",
      description: "Platform connecting students with campus resources, events, and study groups.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Campus Tools",
      impact: "Used by 2000+ students",
      github: "#",
      demo: "#"
    },
    {
      title: "EcoTracker",
      description: "Environmental impact tracking app promoting sustainable practices among students.",
      tech: ["React Native", "Firebase", "Charts.js"],
      category: "Sustainability",
      impact: "200+ active users",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-acm-dark mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore innovative solutions developed by our members that make a real difference 
            in accessibility, campus life, and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-acm-blue to-blue-800"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-acm-blue/10 text-acm-blue px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-green-600 text-sm font-medium">{project.impact}</span>
                </div>
                <h3 className="text-xl font-semibold text-acm-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-acm-blue">
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-600 hover:text-acm-blue">
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
