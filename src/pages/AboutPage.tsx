import React from 'react';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Mr. Fikadu Alemayo',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionary leader with 5+ years in technology and business development across Africa.'
    },
    {
      name: 'Mr. Haftu Girmay',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in enterprise architecture and cybersecurity with global certifications.'
    },
    {
      name: 'Mr. Feysa Bekele',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Operations specialist ensuring seamless project delivery and client satisfaction.'
    },
    {
      name: 'Mr. Yishak ',
      role: 'Lead Security Consultant',
      image: 'https://images.pexels.com/photos/3760787/pexels-photo-3760787.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cybersecurity expert protecting organizations from evolving digital threats.'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'ISO 27001 Certified',
      description: 'Internationally recognized security management standards'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Microsoft Gold Partner',
      description: 'Highest level of Microsoft partnership and expertise'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AWS Advanced Partner',
      description: 'Certified cloud solutions provider with proven expertise'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Cisco Premier Partner',
      description: 'Elite networking solutions and services provider'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuously adopting cutting-edge technologies to solve complex business challenges.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Building trust through transparent communication and ethical business practices.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their unique needs and objectives.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Delivering superior quality solutions that exceed client expectations.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Netlink General Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Pioneering Ethiopia's digital transformation through innovative IT solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2009, Netlink General Solutions emerged from a vision to bridge the technology gap 
                  in Ethiopia and across Africa. What started as a small team of passionate technologists has 
                  grown into one of the region's most trusted IT solutions providers.
                </p>
                <p>
                  Over the years, we've successfully delivered over 500 projects, serving enterprises, 
                  government institutions, and organizations across various industries. Our commitment to 
                  excellence and innovation has made us a preferred partner for businesses seeking 
                  reliable, scalable, and cost-effective IT solutions.
                </p>
                <p>
                  Today, we continue to lead the digital transformation journey, empowering businesses 
                  with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower African businesses with innovative IT solutions that drive digital transformation, 
                enhance operational efficiency, and create sustainable competitive advantages.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner in Africa, recognized for our innovation, reliability, 
                and commitment to helping businesses thrive in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, collaboration, and excellence guide every decision we make and 
                every solution we deliver to our valued clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our actions and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Recognized certifications and partnerships that validate our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              A Message from Our Founder
            </h2>
            <blockquote className="text-xl lg:text-2xl italic mb-8">
              "At Netlink, we believe that technology should be an enabler, not a barrier. 
              Our commitment is to make advanced IT solutions accessible to businesses of all sizes, 
              helping them compete on a global scale while staying rooted in African values."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mr. Fikadu Alemayo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">Mr. Fikadu Alemayo</div>
                <div className="text-blue-100">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;