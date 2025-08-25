'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-acm-blue to-blue-800 text-white min-h-screen flex items-center">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We are <span className="text-yellow-300">ACM Student Chapter</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              A vibrant tech-enthusiast community passionate about computing, collaboration, and innovation.
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Join us in fostering learning, technical growth, and building a diverse, inclusive environment 
              where innovation thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/join" className="btn-primary bg-yellow-500 text-acm-dark hover:bg-yellow-400">
                Join Our Community
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-acm-blue">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">990+</div>
                  <div className="text-sm text-blue-200">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm text-blue-200">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100+</div>
                  <div className="text-sm text-blue-200">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">7+</div>
                  <div className="text-sm text-blue-200">Years Strong</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
