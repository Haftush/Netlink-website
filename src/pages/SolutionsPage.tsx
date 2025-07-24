import React from 'react';
import { Code, Database, Cloud, Shield, Network, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Comprehensive ERP solutions to streamline your business operations and improve efficiency.',
      features: [
        'Financial Management',
        'Supply Chain Optimization',
        'Human Resource Management',
        'Customer Relationship Management',
        'Inventory Management',
        'Business Intelligence & Reporting'
      ],
      technologies: ['SAP', 'Microsoft Dynamics', 'Oracle', 'Odoo'],
      caseStudy: 'Helped a leading Ethiopian manufacturer reduce operational costs by 35% through ERP implementation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Data Center Modernization',
      description: 'Transform your data center infrastructure with modern, scalable, and efficient solutions.',
      features: [
        'Server Virtualization',
        'Storage Optimization',
        'Network Consolidation',
        'Disaster Recovery Planning',
        'Capacity Planning',
        'Performance Monitoring'
      ],
      technologies: ['VMware', 'Hyper-V', 'Dell EMC', 'HPE'],
      caseStudy: 'Modernized a government agency\'s data center, improving performance by 60% while reducing energy costs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization services.',
      features: [
        'Cloud Strategy Development',
        'Application Migration',
        'Infrastructure as Code',
        'Cost Optimization',
        'Security & Compliance',
        'Multi-Cloud Management'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'],
      caseStudy: 'Migrated a financial institution to cloud, reducing infrastructure costs by 40% while improving scalability.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Zero Trust Security Architecture',
      description: 'Implement comprehensive security frameworks that protect your organization from modern threats.',
      features: [
        'Identity & Access Management',
        'Multi-Factor Authentication',
        'Endpoint Security',
        'Network Segmentation',
        'Continuous Monitoring',
        'Incident Response'
      ],
      technologies: ['Microsoft 365', 'Okta', 'CrowdStrike', 'Zscaler'],
      caseStudy: 'Implemented zero trust security for a healthcare provider, reducing security incidents by 85%.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: 'SD-WAN Implementation',
      description: 'Software-defined networking solutions for improved connectivity and network management.',
      features: [
        'Centralized Management',
        'Application Optimization',
        'Quality of Service (QoS)',
        'Security Integration',
        'Cost Reduction',
        'Simplified Operations'
      ],
      technologies: ['Cisco', 'VMware VeloCloud', 'Fortinet', 'Silver Peak'],
      caseStudy: 'Deployed SD-WAN for a retail chain, improving network performance by 50% across 25 locations.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Digital Workplace Solutions',
      description: 'Modern workplace technologies that enhance productivity and collaboration.',
      features: [
        'Collaboration Platforms',
        'Video Conferencing',
        'Digital Asset Management',
        'Mobile Device Management',
        'Remote Work Solutions',
        'Productivity Analytics'
      ],
      technologies: ['Microsoft 365', 'Google Workspace', 'Slack', 'Zoom'],
      caseStudy: 'Transformed a consulting firm\'s workplace, increasing employee productivity by 45% with remote work capabilities.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      icon: '🏦',
      description: 'Secure, compliant solutions for banks and financial institutions.'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'HIPAA-compliant systems for hospitals and medical facilities.'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Industrial automation and supply chain optimization.'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Modern learning platforms and campus infrastructure.'
    },
    {
      name: 'Government',
      icon: '🏛️',
      description: 'Secure, efficient solutions for public sector organizations.'
    },
    {
      name: 'Retail',
      icon: '🛒',
      description: 'Omnichannel commerce and customer experience platforms.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Comprehensive solutions designed to address your specific business challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Solution Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Proven solutions with real-world case studies and measurable results
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Components:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, i) => (
                          <span key={i} className={`px-3 py-1 bg-gradient-to-r ${solution.color} text-white rounded-full text-sm`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Success Story:</h4>
                      <p className="text-gray-600 italic">"{solution.caseStudy}"</p>
                    </div>

                    <button className={`bg-gradient-to-r ${solution.color} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2`}>
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-full h-80 bg-gradient-to-r ${solution.color} rounded-2xl opacity-20 flex items-center justify-center`}>
                      <div className="text-white opacity-80">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions tailored to industry-specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solution Architecture
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive architecture diagrams and technical specifications
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Layer</h3>
                <p className="text-gray-600">End-to-end security with multiple layers of protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Infrastructure</h3>
                <p className="text-gray-600">Robust, scalable network architecture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Management</h3>
                <p className="text-gray-600">Centralized data storage and analytics platform</p>
              </div>
            </div>
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
            Schedule a consultation to discuss your specific requirements and learn how our solutions can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Download Solution Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;