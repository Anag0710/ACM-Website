'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaChalkboardTeacher, FaProjectDiagram, FaBriefcase, FaUsers } from 'react-icons/fa'

export default function ProgramsOverview() {
  const programs = [
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Peer Mentorship",
      description: "Student-Teaching-Student Program where senior members mentor juniors in AI, cybersecurity, web development, and more.",
      impact: "150+ students mentored in 2024",
      color: "bg-blue-500"
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      title: "ACM Xperience",
      description: "Collaborative project development solving real-world problems, from campus utilities to accessibility tools.",
      impact: "20+ active projects",
      color: "bg-green-500"
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Intern with ACM",
      description: "Curated internship opportunities from alumni and industry partners exclusively for chapter members.",
      impact: "80% placement rate",
      color: "bg-purple-500"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Special Interest Groups",
      description: "Focused groups for AI, Women in Computing, Embedded Systems, and other specialized domains.",
      impact: "5 active SIGs",
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-acm-dark mb-6">
            Programs & Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to enhance your technical skills, 
            provide mentorship, and create real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`${program.color} text-white p-3 rounded-lg`}>
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-acm-dark mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-acm-blue/10 text-acm-blue px-3 py-1 rounded-full text-sm font-medium">
                      {program.impact}
                    </span>
                    <Link href="/programs" className="text-acm-blue hover:text-blue-700 font-medium">
                      Learn More →
                    </Link>
                  </div>
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
          <Link href="/programs" className="btn-primary">
            Explore All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
