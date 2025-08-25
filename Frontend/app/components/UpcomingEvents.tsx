'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function UpcomingEvents() {
  const events = [
    {
      title: "Annual Datathon 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      type: "Competition",
      description: "24-hour data science competition with industry mentors and exciting prizes.",
      registrationOpen: true
    },
    {
      title: "AI Workshop Series",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      type: "Workshop",
      description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
      registrationOpen: true
    },
    {
      title: "Tech Talk: Future of Computing",
      date: "March 25, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      type: "Lecture",
      description: "Industry expert discussing emerging trends in quantum computing and AI.",
      registrationOpen: false
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
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and competitions designed to enhance your skills 
            and connect with fellow tech enthusiasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-acm-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                {event.registrationOpen && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Registration Open
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-acm-dark mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-acm-blue" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-acm-blue" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-acm-blue" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              
              <button 
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  event.registrationOpen 
                    ? 'bg-acm-blue text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!event.registrationOpen}
              >
                {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
              </button>
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
          <Link href="/events" className="btn-primary">
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
