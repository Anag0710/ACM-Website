import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-acm-dark text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-acm-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ACM</span>
              </div>
              <span className="text-lg font-bold">Student Chapter</span>
            </div>
            <p className="text-gray-300 mb-4">
              A vibrant tech-enthusiast community passionate about computing, collaboration, and innovation. 
              Join us in our mission to foster learning and technical growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-acm-blue transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-acm-blue transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-acm-blue transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:contact@acm.example.com" className="text-gray-300 hover:text-acm-blue transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@acm.example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>University Campus</li>
              <li>Room 123, Building A</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
