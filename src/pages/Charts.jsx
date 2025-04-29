import PriceChart from '../components/PriceChart';
import { useState } from 'react';
import Select from 'react-select';

export default function Charts() {
  const [symbol, setSymbol] = useState({
    value: 'XAUUSD',
    label: 'Gold (XAU/USD)',
  });
  const [timeframe, setTimeframe] = useState({ value: '60', label: '1 Hour' });
  const [indicators, setIndicators] = useState([]);
  const [activeTab, setActiveTab] = useState('chart'); // 'chart' or 'guide'

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

  // Custom styles for react-select
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#1f2937',
      borderColor: '#374151',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#4b5563',
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? '#0f766e'
        : isFocused
          ? '#1f2937'
          : '#111827',
      color: isSelected ? 'white' : '#d1d5db',
      '&:hover': {
        backgroundColor: '#1f2937',
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#111827',
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: '#0f766e',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: 'white',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: 'white',
      '&:hover': {
        backgroundColor: '#134e4a',
        color: 'white',
      },
    }),
    input: (styles) => ({
      ...styles,
      color: 'white',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'white',
    }),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with tabs */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">
          <span className="text-teal-400">Advanced</span> Trading Charts
        </h1>

        <div className="bg-gray-800 rounded-lg inline-flex p-1">
          <button
            onClick={() => setActiveTab('chart')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'chart'
                ? 'bg-gray-700 text-teal-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Chart View
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'guide'
                ? 'bg-gray-700 text-teal-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Trading Guide
          </button>
        </div>
      </div>

      {activeTab === 'chart' ? (
        <>
          {/* Main chart area */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left sidebar */}
            <div className="lg:w-1/4">
              {/* Controls card */}
              <div className="bg-gray-800 rounded-lg shadow-lg mb-6">
                <div className="p-4 border-b border-gray-700">
                  <h2 className="text-lg font-bold text-white">
                    Chart Controls
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  {/* Symbol Selector */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Asset
                    </label>
                    <Select
                      value={symbol}
                      onChange={setSymbol}
                      options={symbols}
                      styles={selectStyles}
                      isSearchable
                    />
                  </div>

                  {/* Timeframe Selector */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Timeframe
                    </label>
                    <Select
                      value={timeframe}
                      onChange={setTimeframe}
                      options={timeframes}
                      styles={selectStyles}
                    />
                  </div>

                  {/* Indicator Selector */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Indicators
                    </label>
                    <Select
                      isMulti
                      value={indicators}
                      onChange={handleIndicatorChange}
                      options={availableIndicators}
                      styles={selectStyles}
                      placeholder="Add indicators..."
                    />
                  </div>
                </div>
              </div>

              {/* Market Info Card */}
              <div className="bg-gray-800 rounded-lg shadow-lg">
                <div className="p-4 border-b border-gray-700">
                  <h2 className="text-lg font-bold text-white">Market Info</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white font-medium">$1,865.42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">24h Change</span>
                      <span className="text-green-400">+1.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">24h High</span>
                      <span className="text-white">$1,870.21</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">24h Low</span>
                      <span className="text-white">$1,845.63</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volume</span>
                      <span className="text-white">$24.7B</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <a
                      href="/bots"
                      className="block text-center bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition-colors"
                    >
                      Use AI Trading Bot
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main chart area */}
            <div className="lg:w-3/4">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[650px]">
                <PriceChart
                  symbol={symbol.value}
                  timeframe={timeframe.value}
                  indicators={indicators.map((ind) => ind.value)}
                />
              </div>
            </div>
          </div>

          {/* Course and bot promotion */}
          <div className="mt-10 bg-gradient-to-r from-teal-900 to-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Master Chart Analysis with Our Trading Course
                </h3>
                <p className="text-gray-300">
                  Learn how to identify patterns, use indicators effectively,
                  and develop profitable trading strategies.
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center md:justify-end">
                <a
                  href="/courses"
                  className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Join Course
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Trading Guide Tab */
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
            Chart Analysis Guide
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column */}
            <div>
              <h3 className="text-xl font-bold text-teal-400 mb-4">
                Trading Strategies
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">
                    Multiple Timeframe Analysis
                  </h4>
                  <p className="text-gray-200">
                    Use higher timeframes (4H, 1D) to identify the main trend
                    direction, and lower timeframes (15M, 1H) to find optimal
                    entry points.
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">
                    Price Action Patterns
                  </h4>
                  <p className="text-gray-200">
                    Look for patterns like double tops/bottoms, head and
                    shoulders, flags, and triangles to predict potential
                    reversals or continuations.
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">
                    Support & Resistance
                  </h4>
                  <p className="text-gray-200">
                    Identify key price levels where the market has previously
                    reversed. These levels often act as barriers that price may
                    struggle to break through.
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">Volume Analysis</h4>
                  <p className="text-gray-200">
                    High volume during price movements confirms trend strength.
                    Low volume during price increases may indicate a weak trend
                    susceptible to reversal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <h3 className="text-xl font-bold text-teal-400 mb-4">
                Technical Indicators
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">
                    Moving Average (MA)
                  </h4>
                  <p className="text-gray-200">
                    Shows the average price over a specific period. When price
                    crosses above a MA, it signals a potential uptrend. When
                    price crosses below, it signals a potential downtrend.
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">
                    Relative Strength Index (RSI)
                  </h4>
                  <p className="text-gray-200">
                    Measures the speed and change of price movements. Values
                    above 70 indicate overbought conditions (potential sell),
                    while values below 30 indicate oversold conditions
                    (potential buy).
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">Bollinger Bands</h4>
                  <p className="text-gray-200">
                    Consists of a middle band (MA) with upper and lower bands.
                    When price touches the upper band, it may be overbought.
                    When it touches the lower band, it may be oversold.
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">MACD</h4>
                  <p className="text-gray-200">
                    Shows the relationship between two moving averages. When the
                    MACD line crosses above the signal line, it's a potential
                    buy signal. When it crosses below, it's a potential sell
                    signal.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/courses"
                  className="inline-block bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-500 transition-colors"
                >
                  Learn Advanced Trading Strategies
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
