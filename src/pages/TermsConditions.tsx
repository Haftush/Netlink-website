import React from 'react';
import { FileText, Shield, AlertTriangle, Scale, Clock, Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
              </div>
              <p className="text-gray-600 text-lg">
                These Terms and Conditions ("Terms") govern your use of the Netlink General Solutions website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Last updated:</strong> March 15, 2024
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  By accessing and using the services provided by Netlink General Solutions ("Company," "we," "us," or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600">
                    <strong>Important:</strong> If you do not agree to these terms, you should not use our services. 
                    Your continued use of our services constitutes acceptance of any changes to these terms.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Scale className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Service Description</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Netlink General Solutions provides IT solutions and services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Enterprise Network Solutions</li>
                  <li>Cybersecurity Services</li>
                  <li>Business Intelligence and Analytics</li>
                  <li>Smart Infrastructure Solutions</li>
                  <li>Power and Energy Solutions</li>
                  <li>Cloud Computing Services</li>
                  <li>IT Consulting and Support</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Account Security</h4>
                    <p className="text-gray-600 mb-3">You are responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Notifying us immediately of any unauthorized access</li>
                      <li>Using strong passwords and enabling two-factor authentication where available</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h4>
                    <p className="text-gray-600 mb-3">You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Use our services for any illegal or unauthorized purpose</li>
                      <li>Interfere with or disrupt our services or servers</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Transmit any harmful or malicious code</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Service Availability</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    While we strive to maintain high availability of our services, we cannot guarantee uninterrupted access. 
                    Our services may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Scheduled maintenance</li>
                    <li>Technical difficulties</li>
                    <li>Force majeure events</li>
                    <li>Third-party service interruptions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h4>
                    <p className="text-gray-600">
                      All content, features, and functionality of our services are owned by Netlink General Solutions 
                      and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h4>
                    <p className="text-gray-600">
                      You retain ownership of any data, content, or materials you provide to us. By using our services, 
                      you grant us a limited license to use your data solely for the purpose of providing our services.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">6. Privacy and Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our 
                  Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <div className="bg-green-50 rounded-xl p-6">
                  <p className="text-gray-600">
                    <strong>Data Security:</strong> We implement appropriate technical and organizational measures to 
                    protect your personal information. However, no method of transmission over the internet is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">7. Payment Terms</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Fees and Charges</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>All fees are stated in Ethiopian Birr (ETB) unless otherwise specified</li>
                      <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
                      <li>Late payment may result in service suspension</li>
                      <li>All prices are subject to applicable taxes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Refund Policy</h4>
                    <p className="text-gray-600">
                      Refunds are considered on a case-by-case basis. Please contact our support team to discuss 
                      any refund requests. Refunds, if approved, will be processed within 30 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h3>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Disclaimer:</strong> Our services are provided "as is" without any warranties, express or implied. 
                    We disclaim all warranties including but not limited to merchantability, fitness for a particular purpose, 
                    and non-infringement.
                  </p>
                  <p className="text-gray-600">
                    <strong>Limitation:</strong> In no event shall Netlink General Solutions be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Termination by You</h4>
                    <p className="text-gray-600">
                      You may terminate your account at any time by contacting our support team. 
                      Termination will be effective at the end of your current billing period.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Termination by Us</h4>
                    <p className="text-gray-600">
                      We reserve the right to terminate or suspend your account immediately for violation of these Terms, 
                      illegal activity, or non-payment of fees.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h3>
                <p className="text-gray-600">
                  These Terms are governed by and construed in accordance with the laws of Ethiopia. 
                  Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Ethiopia.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">11. Changes to Terms</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Posting the updated Terms on our website</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending email notifications for material changes</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>legal@netlink.et</p>
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

export default TermsConditions;