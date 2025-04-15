// pages/Bots.jsx
import { products } from '../data/products';

export default function Bots() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          AI-Powered <span className="text-teal-400">Trading Bots</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our algorithmic trading solutions are designed to execute trades with
          precision and consistency across multiple markets.
        </p>
      </div>

      {/* Bots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((bot) => (
          <div
            key={bot.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-gray-700"
          >
            {/* Bot Image */}
            <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-5xl">{bot.icon || '🤖'}</div>
            </div>

            {/* Bot Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{bot.name}</h3>
                <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2 py-1 rounded-full">
                  {bot.category || 'Bot'}
                </span>
              </div>

              <p className="text-gray-400 mb-6 h-20">{bot.description}</p>

              {/* Bot Features */}
              {bot.features && (
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Key Features</div>
                  <ul className="text-gray-400 text-sm">
                    {bot.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <span className="mr-2 text-teal-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price and CTA */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                <div>
                  <span className="text-3xl font-bold text-white">
                    ${bot.price}
                  </span>
                  {bot.period && (
                    <span className="text-gray-500 text-sm ml-1">
                      /{bot.period}
                    </span>
                  )}
                </div>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-teal-400 mb-2">
              How do these trading bots work?
            </h3>
            <p className="text-gray-400">
              Our bots use sophisticated algorithms to analyze market data and
              execute trades based on predefined strategies and risk parameters.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-teal-400 mb-2">
              Do I need technical knowledge to use them?
            </h3>
            <p className="text-gray-400">
              No technical expertise required. Our bots come with user-friendly
              interfaces and pre-configured settings for immediate use.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-teal-400 mb-2">
              What kind of returns can I expect?
            </h3>
            <p className="text-gray-400">
              While past performance doesn't guarantee future results, our bots
              are designed to identify profitable opportunities while managing
              risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
