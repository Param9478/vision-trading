// pages/Bots.jsx
import { products } from '../data/products';

export default function Bots() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Trading Bots</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((bot) => (
          <div key={bot.id} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white">{bot.name}</h3>
            <p className="text-gray-400 mt-2">{bot.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-400">
                ${bot.price}
              </span>
              <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
