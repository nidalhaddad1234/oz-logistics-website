'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp, Globe, Ship, Truck } from 'lucide-react'

const newsCategories = [
  { id: 'all', label: 'All News', icon: Globe },
  { id: 'industry', label: 'Industry Updates', icon: TrendingUp },
  { id: 'shipping', label: 'Shipping News', icon: Ship },
  { id: 'logistics', label: 'Logistics Trends', icon: Truck },
]

const newsArticles = [
  {
    id: 1,
    title: 'Global Trade Routes Expanding: New Opportunities for Asian Markets',
    excerpt: 'Recent developments in international trade agreements are opening new possibilities for businesses looking to expand into Asian markets, with streamlined customs processes and reduced tariffs.',
    category: 'industry',
    author: 'Sarah Johnson',
    date: '2024-08-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true,
    tags: ['Trade', 'Asia', 'Expansion'],
  },
  {
    id: 2,
    title: 'Technology Revolution in Shipping: AI and IoT Transforming Logistics',
    excerpt: 'How artificial intelligence and Internet of Things devices are revolutionizing the shipping industry, improving efficiency and reducing costs for businesses worldwide.',
    category: 'shipping',
    author: 'Michael Chen',
    date: '2024-08-12',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    tags: ['Technology', 'AI', 'IoT'],
  },
  {
    id: 3,
    title: 'Sustainable Logistics: Green Shipping Solutions for the Future',
    excerpt: 'Exploring eco-friendly shipping alternatives and how companies are reducing their carbon footprint through innovative logistics solutions and sustainable practices.',
    category: 'logistics',
    author: 'Emily Rodriguez',
    date: '2024-08-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    tags: ['Sustainability', 'Green', 'Environment'],
  },
  {
    id: 4,
    title: 'E-commerce Boom Drives Logistics Innovation',
    excerpt: 'The rapid growth of online shopping is pushing logistics companies to innovate with faster delivery options and more efficient last-mile solutions.',
    category: 'industry',
    author: 'David Thompson',
    date: '2024-08-08',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    tags: ['E-commerce', 'Innovation', 'Delivery'],
  },
  {
    id: 5,
    title: 'Supply Chain Resilience: Lessons from Global Disruptions',
    excerpt: 'How businesses are building more resilient supply chains to withstand future disruptions and maintain operational continuity.',
    category: 'logistics',
    author: 'Sarah Johnson',
    date: '2024-08-05',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    tags: ['Supply Chain', 'Resilience', 'Risk Management'],
  },
  {
    id: 6,
    title: 'Digital Documentation: Streamlining Customs Processes',
    excerpt: 'The shift towards digital documentation is revolutionizing customs clearance, reducing processing times and improving accuracy.',
    category: 'shipping',
    author: 'Michael Chen',
    date: '2024-08-03',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    tags: ['Digital', 'Customs', 'Documentation'],
  },
]

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [displayCount, setDisplayCount] = useState(6)

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory)

  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured).slice(0, displayCount)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest Industry News & Insights
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay informed with the latest developments in global logistics, shipping trends, 
            and industry innovations that impact your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {newsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'all' && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredArticle.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          {featuredArticle.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{featuredArticle.author}</span>
                    </div>
                    
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full capitalize">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-xs">
                        {article.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">{article.author}</span>
                  </div>

                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredArticles.length > displayCount && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="btn btn-outline"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Industry News
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest logistics insights, 
              shipping updates, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
