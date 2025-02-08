import PropTypes from 'prop-types'; // Import PropTypes

export default function PriceChart({ symbol = 'XAUUSD' }) {
  return (
    <div className="h-[600px]">
      <iframe
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=${symbol}&interval=60&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1`}
        className="w-full h-full"
        title="Live Chart"
      />
    </div>
  );
}

// Define PropTypes
PriceChart.propTypes = {
  symbol: PropTypes.string, // 'symbol' should be a string
};
