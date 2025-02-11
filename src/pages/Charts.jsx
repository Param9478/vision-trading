import PriceChart from '../components/PriceChart';
import { useState } from 'react';
import Select from 'react-select';

export default function Charts() {
  const [symbol, setSymbol] = useState({
    value: 'XAUUSD',
    label: 'Gold (XAU/USD)',
  });
  const [timeframe, setTimeframe] = useState({ value: '60', label: '1 Hour' }); // Default to 1 hour
  const [indicators, setIndicators] = useState([]); // Selected indicators

  const symbols = [
    { label: 'Gold (XAU/USD)', value: 'XAUUSD' },
    { label: 'Silver (XAG/USD)', value: 'XAGUSD' },
    { label: 'Bitcoin (BTC/USD)', value: 'BTCUSD' },
    { label: 'Ethereum (ETH/USD)', value: 'ETHUSD' },
    { label: 'S&P 500 (SPX500)', value: 'SPX500' },
  ];

  const timeframes = [
    { label: '1 Minute', value: '1' },
    { label: '5 Minutes', value: '5' },
    { label: '15 Minutes', value: '15' },
    { label: '1 Hour', value: '60' },
    { label: '4 Hours', value: '240' },
    { label: '1 Day', value: '1D' },
  ];

  const availableIndicators = [
    { label: 'Moving Average (MA)', value: 'MA' },
    { label: 'Relative Strength Index (RSI)', value: 'RSI' },
    { label: 'Bollinger Bands', value: 'BB' },
    { label: 'MACD', value: 'MACD' },
  ];

  const handleIndicatorChange = (selectedOptions) => {
    setIndicators(selectedOptions || []);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Live Charts</h1>

      {/* Controls Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Symbol Selector */}
        <div>
          <label className="block text-gray-300 mb-2">Select Asset:</label>
          <Select
            value={symbol}
            onChange={setSymbol}
            options={symbols}
            className="text-black"
            classNamePrefix="select"
          />
        </div>

        {/* Timeframe Selector */}
        <div>
          <label className="block text-gray-300 mb-2">Select Timeframe:</label>
          <Select
            value={timeframe}
            onChange={setTimeframe}
            options={timeframes}
            className="text-black"
            classNamePrefix="select"
          />
        </div>

        {/* Indicator Selector */}
        <div>
          <label className="block text-gray-300 mb-2">Add Indicators:</label>
          <Select
            isMulti
            value={indicators}
            onChange={handleIndicatorChange}
            options={availableIndicators}
            className="text-black"
            classNamePrefix="select"
          />
        </div>
      </div>

      {/* Chart Container */}
      <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
        <PriceChart
          symbol={symbol.value}
          timeframe={timeframe.value}
          indicators={indicators.map((ind) => ind.value)}
        />
      </div>

      {/* Chart Description */}
      <div className="mt-8 text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-6">
          How to Use the Charts
        </h2>
        <p className="mb-6">
          Our advanced charting tools allow you to analyze price movements,
          identify trends, and make informed trading decisions. Here&apos;s how to
          get the most out of them:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tips Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-4">
              Tips for Effective Chart Analysis
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Use <strong>multiple timeframes</strong> to confirm trends.
              </li>
              <li>
                Add <strong>indicators</strong> like Moving Averages or RSI for
                deeper insights.
              </li>
              <li>
                Look for <strong>support and resistance</strong> levels to plan
                entries and exits.
              </li>
              <li>
                Combine <strong>technical analysis</strong> with fundamental
                news for better results.
              </li>
            </ul>
          </div>

          {/* Indicators Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-4">
              Popular Indicators
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Moving Average (MA):</strong> Identifies trends and
                potential reversals.
              </li>
              <li>
                <strong>Relative Strength Index (RSI):</strong> Measures
                overbought or oversold conditions.
              </li>
              <li>
                <strong>Bollinger Bands:</strong> Shows volatility and potential
                price breakouts.
              </li>
              <li>
                <strong>MACD:</strong> Highlights momentum and trend changes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
