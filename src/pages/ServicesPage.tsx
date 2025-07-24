import React from 'react';
import { Network, Lock, Database, Building, Zap, Server, Cloud, Shield, Users, Wrench, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'networks',
      icon: <Network className="w-12 h-12" />,
      title: 'Enterprise Networks',
      description: 'Comprehensive network infrastructure solutions for seamless connectivity and optimal performance.',
      features: [
        'LAN/WAN Design & Implementation',
        'Wireless Network Solutions',
        'Network Security & Monitoring',
        'SD-WAN Technologies',
        'Network Optimization',
        'Disaster Recovery Planning'
      ],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'cybersecurity',
      icon: <Lock className="w-12 h-12" />,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security measures to protect your digital assets from evolving threats.',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessments',
        'Security Audits & Compliance',
        'Endpoint Protection',
        'Identity & Access Management',
        'Security Awareness Training'
      ],
      technologies: ['Palo Alto', 'Symantec', 'CrowdStrike', 'Kaspersky'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'bi',
      icon: <Database className="w-12 h-12" />,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights for informed decision-making.',
      features: [
        'Data Warehousing Solutions',
        'Analytics & Reporting',
        'Dashboard Development',
        'Predictive Analytics',
        'Data Integration',
        'Performance Monitoring'
      ],
      technologies: ['Microsoft BI', 'Tableau', 'Power BI', 'Qlik'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'infrastructure',
      icon: <Building className="w-12 h-12" />,
      title: 'Smart Infrastructure',
      description: 'Intelligent building solutions that enhance efficiency and user experience.',
      features: [
        'Smart Building Automation',
        'IoT Device Integration',
        'Energy Management Systems',
        'Access Control Solutions',
        'Video Surveillance',
        'Environmental Monitoring'
      ],
      technologies: ['Honeywell', 'Schneider Electric', 'Siemens', 'Johnson Controls'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'power',
      icon: <Zap className="w-12 h-12" />,
      title: 'Power Solutions',
      description: 'Reliable power systems ensuring uninterrupted business operations.',
      features: [
        'UPS Systems Installation',
        'Power Quality Analysis',
        'Generator Solutions',
        'Solar Power Integration',
        'Battery Management',
        'Power Monitoring'
      ],
      technologies: ['APC', 'Schneider', 'Eaton', 'Vertiv'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const additionalServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Data Center Solutions',
      description: 'Complete data center design, implementation, and management services.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization for modern businesses.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and establish strong governance frameworks.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT with business objectives.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Managed Services',
      description: '24/7 monitoring, maintenance, and support for your IT infrastructure.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Jane Doe',
      company: 'Acme Corp',
      feedback: 'Netlink transformed our IT infrastructure, delivering reliable solutions and exceptional support. Highly recommended!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'John Smith',
      company: 'Tech Innovators',
      feedback: 'Their team is knowledgeable, responsive, and truly cares about our business success.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily Chen',
      company: 'Global Solutions',
      feedback: 'We trust Netlink for all our IT needs. Their expertise and professionalism are unmatched.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including finance, healthcare, education, manufacturing, and more.'
    },
    {
      question: 'Can you customize solutions for my business?',
      answer: 'Absolutely! We tailor our services to meet the unique needs and goals of each client.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide 24/7 support and managed services to ensure your IT systems run smoothly.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply request a consultation and our team will guide you through the process.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Comprehensive IT solutions designed to drive your business forward in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end solutions tailored to meet your unique business requirements
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.8s' }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 bg-gradient-to-r ${service.color} text-white rounded-full text-sm`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className={`bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 shadow-md group-hover:scale-105`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`w-full h-80 bg-gradient-to-r ${service.color} rounded-2xl opacity-20 flex items-center justify-center animate-fade-in`} style={{ animationDuration: '1.2s' }}>
                    <div className="text-white opacity-80">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Supplementary solutions to complement your core IT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationDuration: '0.8s' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-100 animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear from businesses who trust Netlink for their IT needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1 + 0.3}s`, animationDuration: '0.8s' }}>
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 shadow-md" />
                <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-blue-600 text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: `${idx * 0.1 + 0.4}s`, animationDuration: '0.7s' }}>
                <div className="font-semibold text-gray-900 mb-2">{faq.question}</div>
                <div className="text-gray-700">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and challenges' },
              { step: '02', title: 'Planning', description: 'Designing tailored solutions and implementation roadmap' },
              { step: '03', title: 'Implementation', description: 'Executing the solution with minimal disruption' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization services' }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.5}s`, animationDuration: '0.7s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white animate-fade-in-up" style={{ animationDuration: '1s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Request Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;