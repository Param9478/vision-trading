// pages/Home.jsx

import PriceChart from '../../components/PriceChart';
import { SplineShowcase } from '../../components/SplineShowcase';
import SubscriptionForm from './SubscriptionForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center relative overflow-hidden rounded-2xl mb-20">
        <SplineShowcase scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        {/* <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Master Trading with{' '}
            <span className="text-teal-400">AI-Powered Tools</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Unlock the power of real-time market data, automated trading bots,
            and expert education to elevate your trading game.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-200">
            <a
              href="/bots"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-transform"
            >
              Get Started
            </a>
            <a
              href="/charts"
              className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:border-teal-600 transform hover:scale-105 transition-transform"
            >
              Live Charts
            </a>
          </div>
        </div> */}
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-in">
          Why Choose <span className="text-teal-400">VisionTrading</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: 'AI-Powered Bots',
              description:
                'Our trading bots use advanced algorithms to analyze markets and execute trades with precision.',
            },
            {
              icon: '📊',
              title: 'Real-Time Data',
              description:
                'Access live market data and charts to make informed decisions instantly.',
            },
            {
              icon: '🎓',
              title: 'Expert Education',
              description:
                'Learn from industry experts with our comprehensive courses and webinars.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform hover:shadow-2xl animate-fade-in"
            >
              <div className="text-4xl mb-4 text-teal-400">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Chart Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">
          Live <span className="text-teal-400">Gold Price</span> (XAU/USD)
        </h2>
        <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in">
          <PriceChart />
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="mb-20 bg-gradient-to-r from-gray-900 to-gray-800 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-in">
          Proven <span className="text-teal-400">Results</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '95%', label: 'Accuracy Rate' },
            { value: '24/7', label: 'Market Monitoring' },
            { value: '10,000+', label: 'Trades Executed' },
            { value: '$1M+', label: 'Profits Generated' },
          ].map((metric, index) => (
            <div key={index} className="animate-fade-in">
              <h3 className="text-4xl font-bold text-teal-400">
                {metric.value}
              </h3>
              <p className="text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-in">
          What Our <span className="text-teal-400">Users Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                'Trade with Scholars has completely transformed my trading strategy. The bots are incredibly accurate, and the educational resources are top-notch.',
              name: 'John Doe',
            },
            {
              quote:
                "I love the real-time charts and the ease of use. It's like having a professional trading desk at my fingertips.",
              name: 'Jane Smith',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform hover:shadow-2xl animate-fade-in"
            >
              <p className="text-gray-400 italic">{testimonial.quote}</p>
              <p className="text-white mt-4 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-white mb-4">
          Get Free <span className="text-teal-400">Market Updates</span>
        </h3>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter for the latest market insights and trading
          tips.
        </p>
        <SubscriptionForm />
      </div>
    </div>
  );
}
