import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Netlink General Solutions ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Last updated:</strong> March 15, 2024
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h4>
                    <p className="text-gray-600 mb-3">
                      We may collect personal information that you provide to us directly, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Company name and job title</li>
                      <li>Account credentials and authentication information</li>
                      <li>Communication preferences</li>
                      <li>Information provided through forms, surveys, or customer support interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h4>
                    <p className="text-gray-600 mb-3">
                      We automatically collect certain technical information when you visit our website:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>IP address and location information</li>
                      <li>Browser type and version</li>
                      <li>Operating system and device information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referral sources and search terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and manage your account</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To provide customer support and respond to your inquiries</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Compliance:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection practices</li>
                    <li>Secure data centers and infrastructure</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h3>
                <p className="text-gray-600 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                  <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h3>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control cookies through your browser settings, but disabling cookies may affect website functionality.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h3>
                <p className="text-gray-600">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. The retention period depends on the type of 
                  information and the purposes for which it was collected.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h3>
                <p className="text-gray-600">
                  Your personal information may be transferred to and processed in countries other than your country of residence. 
                  We ensure that such transfers are conducted in accordance with applicable data protection laws and that appropriate 
                  safeguards are in place to protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h3>
                <p className="text-gray-600">
                  Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information 
                  from children under 16. If we become aware that we have collected personal information from a child under 16, 
                  we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on 
                  our website and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>privacy@netlink.et</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>+251 11 123 4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="font-medium">Mailing Address</p>
                  <p>Netlink General Solutions<br />
                  Bole Road, Addis Ababa<br />
                  Ethiopia, 1000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;