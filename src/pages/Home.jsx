// pages/Home.jsx
import PriceChart from '../components/PriceChart';
import SubscriptionForm from '../components/SubscriptionForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Master Trading with AI-Powered Tools
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Access real-time market data, automated trading bots, and expert
          education
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/bots"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="/charts"
            className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:border-blue-600"
          >
            Live Charts
          </a>
        </div>
      </div>

      {/* Featured Chart */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Live Gold Price (XAU/USD)
        </h2>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <PriceChart />
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Get Free Market Updates
        </h3>
        <SubscriptionForm />
      </div>
    </div>
  );
}
