// pages/Charts.jsx
import PriceChart from '../components/PriceChart';
import { useState } from 'react';

export default function Charts() {
  const [symbol, setSymbol] = useState('XAUUSD');

  const symbols = [
    { name: 'Gold (XAU/USD)', value: 'XAUUSD' },
    { name: 'Silver (XAG/USD)', value: 'XAGUSD' },
    { name: 'Bitcoin (BTC/USD)', value: 'BTCUSD' },
    { name: 'Ethereum (ETH/USD)', value: 'ETHUSD' },
    { name: 'S&P 500 (SPX500)', value: 'SPX500' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Live Charts</h1>

      {/* Symbol Selector */}
      <div className="mb-8">
        <label className="block text-gray-300 mb-2">Select Asset:</label>
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {symbols.map((sym) => (
            <option key={sym.value} value={sym.value}>
              {sym.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Container */}
      <div className="rounded-lg overflow-hidden shadow-xl">
        <PriceChart symbol={symbol} />
      </div>

      {/* Chart Description */}
      <div className="mt-8 text-gray-300">
        <p>
          Use our advanced charting tools to analyze price movements, identify
          trends, and make informed trading decisions. Switch between different
          assets using the dropdown above.
        </p>
      </div>
    </div>
  );
}
