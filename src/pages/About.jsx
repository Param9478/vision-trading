// pages/About.jsx
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Story</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining cutting-edge technology with trading expertise to empower
            traders worldwide
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('company')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'company'
                  ? 'bg-gray-700 text-teal-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Company
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'team'
                  ? 'bg-gray-700 text-teal-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'vision'
                  ? 'bg-gray-700 text-teal-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Vision
            </button>
          </div>
        </div>

        {/* Company Tab */}
        {activeTab === 'company' && (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Our Company</h2>

            <div className="space-y-6 text-gray-300">
              <p>
                Trade with Scholars was founded in 2023 by a team of experienced
                traders, data scientists, and software engineers who recognized
                a gap in the market for intelligent, accessible trading tools.
                We combine the power of artificial intelligence and machine
                learning with proven trading strategies to deliver exceptional
                results.
              </p>

              <p>
                Our platform has grown rapidly, now serving thousands of traders
                across more than 30 countries. We're backed by leading venture
                capital firms who share our vision of democratizing trading
                technology and making sophisticated trading strategies
                accessible to everyone.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    2023
                  </div>
                  <div className="text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    25+
                  </div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    5,000+
                  </div>
                  <div className="text-gray-400">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">
              Leadership Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
                  <div className="text-6xl">👨‍💼</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Rahul Sharma</h3>
                  <p className="text-teal-400">CEO & Founder</p>
                  <p className="mt-3 text-gray-300">
                    With over 10 years of experience in algorithmic trading and
                    financial technology, Rahul leads Trade with Scholars with a
                    focus on innovation and user success. Previously, he worked
                    at leading quantitative trading firms and holds degrees in
                    Computer Science and Finance.
                  </p>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    Parminder Singh
                  </h3>
                  <p className="text-teal-400">CTO & Co-Founder</p>
                  <p className="mt-3 text-gray-300">
                    Parminder leads our engineering team, bringing expertise in
                    AI, machine learning, and financial data analysis. His
                    background includes developing trading systems for major
                    investment banks and a Ph.D. in Computer Science with a
                    focus on predictive algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vision Tab */}
        {activeTab === 'vision' && (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">
              Our Vision & Values
            </h2>

            <div className="space-y-6 text-gray-300">
              <p>
                At Trade with Scholars, we're on a mission to democratize
                trading by providing institutional-grade tools and education to
                traders of all levels. We believe that with the right technology
                and knowledge, anyone can achieve consistent trading success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="text-teal-400 text-xl mb-2">Transparency</div>
                  <p className="text-gray-300">
                    We believe in complete openness about our methodologies,
                    performance metrics, and pricing. No hidden fees or
                    unrealistic promises.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="text-teal-400 text-xl mb-2">Innovation</div>
                  <p className="text-gray-300">
                    We continuously push the boundaries of what's possible in
                    trading technology, investing heavily in research and
                    development.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="text-teal-400 text-xl mb-2">Education</div>
                  <p className="text-gray-300">
                    We're committed to empowering traders through comprehensive
                    learning resources, believing knowledge is as important as
                    technology.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="text-teal-400 text-xl mb-2">Integrity</div>
                  <p className="text-gray-300">
                    We build trust through ethical practices, reliable tools,
                    and putting our users' interests first in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
