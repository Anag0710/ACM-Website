'use client'
import { motion } from 'framer-motion'
import { FaUsers, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

export default function AboutSection() {
  const features = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Diverse Community",
      description: "A welcoming space for students from all backgrounds and skill levels to learn and grow together."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Encouraging creative problem-solving and cutting-edge technology exploration through hands-on projects."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Learning Excellence",
      description: "Commitment to continuous learning through mentorship, workshops, and collaborative experiences."
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-acm-dark mb-6">
            About Our Chapter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are officially the ACM Student Chapter of our institution, dedicated to fostering 
            a community where technology enthusiasts can collaborate, learn, and innovate together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-acm-blue mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-acm-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-acm-dark mb-6">
                Our Mission & Vision
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Mission:</strong> To create an inclusive environment that emphasizes learning, 
                collaboration, and technical growth while building lasting connections within the computing community.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Vision:</strong> To be the leading student organization that empowers the next generation 
                of computing professionals through innovation, mentorship, and community engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Innovation', 'Collaboration', 'Learning', 'Diversity', 'Excellence'].map((value) => (
                  <span key={value} className="bg-acm-blue/10 text-acm-blue px-3 py-1 rounded-full text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-acm-blue to-blue-800 rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Join Our Growing Community</h4>
              <p className="mb-6">
                From 50 to 990+ members in 7 years - be part of our incredible journey!
              </p>
              <a href="/join" className="bg-white text-acm-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Become a Member
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
