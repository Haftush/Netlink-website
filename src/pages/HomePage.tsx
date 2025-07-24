import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Network, Lock, Database, Building, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Enterprise Networks',
      description: 'Robust network infrastructure solutions for seamless business operations.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Data-driven insights for informed business decisions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Smart Infrastructure',
      description: 'Intelligent building solutions for modern workspaces.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Solutions',
      description: 'Reliable power systems for uninterrupted operations.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Ethiopia',
      text: 'Netlink transformed our IT infrastructure completely. Their expertise and dedication are unmatched.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      company: 'Ethiopian Bank',
      text: 'Outstanding cybersecurity solutions that gave us peace of mind. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Global Logistics',
      text: 'Professional team, excellent support, and cutting-edge solutions. Perfect partnership!',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Empowering Ethiopia's
                  <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent"> Digital Future</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Leading IT solutions provider delivering innovative technology solutions for modern businesses across Africa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-yellow-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet the unique needs of African businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Netlink?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With over 15 years of experience in the Ethiopian market, we understand the unique challenges and opportunities that businesses face in Africa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Local expertise with global standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Certified professionals and partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Cost-effective solutions</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Building className="w-32 h-32 text-blue-600 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading organizations across Ethiopia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portal"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;