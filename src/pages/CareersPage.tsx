import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Star, Heart, Zap, Shield, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and respect for personal time'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Culture',
      description: 'Team-oriented environment that values diverse perspectives'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation Focus',
      description: 'Encouraged to explore new technologies and creative solutions'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Network Engineer',
      department: 'Infrastructure',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      description: 'Lead network infrastructure projects and mentor junior engineers in designing and implementing enterprise-grade network solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience in network engineering',
        'CCNP or equivalent certification',
        'Experience with Cisco, Juniper, and Fortinet technologies',
        'Strong troubleshooting and problem-solving skills'
      ],
      responsibilities: [
        'Design and implement enterprise network solutions',
        'Lead network infrastructure projects',
        'Mentor junior team members',
        'Collaborate with clients on technical requirements',
        'Ensure network security and performance optimization'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$40,000 - $55,000',
      description: 'Monitor security systems, investigate threats, and implement security measures to protect our clients\' digital assets.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years of experience in cybersecurity',
        'Security certifications (CISSP, CEH, or similar)',
        'Experience with SIEM tools and threat analysis',
        'Knowledge of compliance frameworks'
      ],
      responsibilities: [
        'Monitor security systems and investigate incidents',
        'Conduct vulnerability assessments',
        'Implement security policies and procedures',
        'Provide security training to clients',
        'Stay updated on latest security threats and trends'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients, focusing on scalability and cost optimization.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of experience with cloud platforms',
        'AWS, Azure, or Google Cloud certifications',
        'Experience with Infrastructure as Code',
        'Strong understanding of DevOps practices'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead cloud migration projects',
        'Optimize cloud costs and performance',
        'Collaborate with development teams',
        'Ensure cloud security and compliance'
      ]
    },
    {
      id: 4,
      title: 'Business Intelligence Developer',
      department: 'Data & Analytics',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$35,000 - $50,000',
      description: 'Develop and maintain business intelligence solutions, creating dashboards and reports that drive data-driven decisions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in BI development',
        'Proficiency in SQL and data modeling',
        'Experience with Power BI, Tableau, or similar tools',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Develop BI solutions and dashboards',
        'Create data models and reports',
        'Collaborate with stakeholders on requirements',
        'Optimize database performance',
        'Provide training on BI tools'
      ]
    },
    {
      id: 5,
      title: 'Technical Support Specialist',
      department: 'Support',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$25,000 - $35,000',
      description: 'Provide technical support to clients, troubleshoot issues, and ensure high levels of customer satisfaction.',
      requirements: [
        'Bachelor\'s degree in IT or related field',
        '2+ years of experience in technical support',
        'Strong communication and problem-solving skills',
        'Experience with Windows and Linux systems',
        'Customer service oriented mindset'
      ],
      responsibilities: [
        'Provide technical support to clients',
        'Troubleshoot hardware and software issues',
        'Document support cases and solutions',
        'Escalate complex issues to senior staff',
        'Maintain high customer satisfaction levels'
      ]
    },
    {
      id: 6,
      title: 'Junior Software Developer',
      department: 'Development',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      salary: '$30,000 - $40,000',
      description: 'Join our development team to build custom applications and contribute to our growing portfolio of software solutions.',
      requirements: [
        'Bachelor\'s degree in Software Engineering or related field',
        '1-2 years of programming experience',
        'Proficiency in Python, Java, or .NET',
        'Understanding of web development frameworks',
        'Eagerness to learn and grow'
      ],
      responsibilities: [
        'Develop and maintain software applications',
        'Participate in code reviews and testing',
        'Collaborate with senior developers',
        'Document code and technical specifications',
        'Contribute to system design discussions'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health insurance',
    'Professional development budget',
    'Flexible working hours',
    'Remote work options',
    'Annual team retreats',
    'Technology allowance',
    'Career advancement opportunities'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Be part of Ethiopia's leading IT solutions provider and help shape the future of technology in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              A workplace where innovation thrives and every team member is valued
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive benefits and perks that support your professional and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Submit your application through our career portal' },
              { step: '02', title: 'Initial Review', description: 'Our HR team reviews your application and qualifications' },
              { step: '03', title: 'Interviews', description: 'Technical and cultural fit interviews with our team' },
              { step: '04', title: 'Offer', description: 'Receive your offer and join our growing team' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Submit General Application</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;