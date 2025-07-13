import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    department: 'Leadership',
    bio: 'With over 15 years in global logistics, Sarah leads Oz Logistics with a vision for innovative freight solutions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    linkedin: '#',
    email: 'sarah.johnson@oz-logistics.com',
    phone: '+1 (555) 123-4567',
  },
  {
    name: 'Michael Chen',
    position: 'Operations Director',
    department: 'Operations',
    bio: 'Michael ensures smooth operations across all our logistics channels with his expertise in supply chain management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    linkedin: '#',
    email: 'michael.chen@oz-logistics.com',
    phone: '+1 (555) 123-4568',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Customer Success Manager',
    department: 'Customer Relations',
    bio: 'Emily is dedicated to ensuring exceptional customer experiences and building lasting partnerships.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    linkedin: '#',
    email: 'emily.rodriguez@oz-logistics.com',
    phone: '+1 (555) 123-4569',
  },
  {
    name: 'David Thompson',
    position: 'Logistics Coordinator',
    department: 'Logistics',
    bio: 'David coordinates complex shipping arrangements and ensures timely delivery across our global network.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    linkedin: '#',
    email: 'david.thompson@oz-logistics.com',
    phone: '+1 (555) 123-4570',
  },
]

export default function TeamSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our experienced professionals bring decades of combined expertise in 
            international logistics, ensuring your cargo is in capable hands every step of the way.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Department Badge */}
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                  {member.department}
                </div>

                {/* Name & Position */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.position}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 truncate"
                    >
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {member.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented professionals to join our logistics family. 
              Explore career opportunities and grow with us in the dynamic world of global freight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="btn btn-primary"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="btn btn-outline"
              >
                Contact HR Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
