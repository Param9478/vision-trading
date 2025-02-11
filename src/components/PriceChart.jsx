import PropTypes from 'prop-types';
import { useState } from 'react';

// components/PriceChart.jsx
export default function PriceChart({
  symbol = 'XAUUSD',
  timeframe = '60',
  indicators = [],
}) {
  const [iframeError, setIframeError] = useState(false);

  const indicatorParams = indicators?.map((ind) => `&studies=${ind}`).join('');

  return (
    <div className="relative h-[600px] bg-gray-900 border border-teal-600 rounded-lg overflow-hidden">
      {iframeError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          <p>Failed to load the chart. Please try again later.</p>
        </div>
      ) : (
        <>
          <iframe
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=${symbol}&interval=${timeframe}&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=F1F3F6${indicatorParams}&theme=dark&style=1`}
            className="w-full h-full"
            title="Live Chart"
            onError={() => setIframeError(true)}
          />
        </>
      )}
    </div>
  );
}

PriceChart.propTypes = {
  symbol: PropTypes.string, // 'symbol' should be a string
  timeframe: PropTypes.string, // 'timeframe' should be a string
  indicators: PropTypes.arrayOf(PropTypes.string), // 'indicators' should be an array of strings
};

PriceChart.defaultProps = {
  symbol: 'XAUUSD',
  timeframe: '60',
  indicators: [],
};
