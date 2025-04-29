// pages/Bots.jsx
import { useState } from 'react';
import { products } from '../data/products';

export default function Bots() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'How do these trading bots work?',
      answer:
        'Our bots use sophisticated algorithms to analyze market data and execute trades based on predefined strategies and risk parameters. Each bot continuously monitors markets 24/7, looking for specific patterns and conditions before placing trades according to its strategy.',
    },
    {
      question: 'Do I need technical knowledge to use them?',
      answer:
        'No technical expertise required. Our bots come with user-friendly interfaces and pre-configured settings for immediate use. We provide a simple dashboard where you can monitor performance, adjust risk levels, and start/stop the bot with just a few clicks.',
    },
    {
      question: 'What kind of returns can I expect?',
      answer:
        "While past performance doesn't guarantee future results, our bots are designed to identify profitable opportunities while managing risk. Historical performance data is available for each bot, typically showing monthly returns between 5-15% depending on market conditions and risk settings.",
    },
    {
      question: 'How much capital do I need to start?',
      answer:
        'You can start with as little as $1,000, though we recommend $5,000+ for optimal position sizing and risk management. All bots include adjustable position sizing to work with your specific account size.',
    },
    {
      question: 'Can I customize the trading strategies?',
      answer:
        'Yes! While our bots come pre-configured for optimal performance, advanced users can adjust parameters like entry/exit conditions, position sizing, and risk tolerance to match their trading preferences.',
    },
  ];

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

      {/* New FAQ Section */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked <span className="text-teal-400">Questions</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered trading solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {faqItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full text-left p-5 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">
                      {item.question}
                    </h3>
                    <div
                      className={`transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 pb-5 px-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {faqItems.slice(3).map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(index + 3 === openIndex ? -1 : index + 3)
                  }
                  className="w-full text-left p-5 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">
                      {item.question}
                    </h3>
                    <div
                      className={`transition-transform duration-200 ${
                        openIndex === index + 3 ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index + 3 ? 'max-h-40 pb-5 px-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions about our trading bots?
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg transition-colors"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
}
