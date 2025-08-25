'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NewsSection() {
  const news = [
    {
      title: "ACM Chapter Wins 'Outstanding Student Chapter' Award",
      excerpt: "Our chapter has been recognized nationally for excellence in recruitment and community engagement.",
      date: "February 28, 2024",
      category: "Awards"
    },
    {
      title: "New SIG-AI Group Launches with 50+ Members",
      excerpt: "Special Interest Group for Artificial Intelligence kicks off with exciting projects and workshops.",
      date: "February 25, 2024",
      category: "Programs"
    },
    {
      title: "COVID Relief Database Helps 1000+ Families",
      excerpt: "Our community service project connecting families with healthcare resources shows real impact.",
      date: "February 20, 2024",
      category: "Community Service"
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
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest achievements, new programs, and community impact stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-acm-blue/10 text-acm-blue px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-acm-dark mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link href="/blog" className="text-acm-blue hover:text-blue-700 font-medium">
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-acm-dark mb-4">Stay Connected</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for regular updates about events, programs, and opportunities.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-acm-blue"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
