// components/SubscriptionForm.jsx
import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-transform"
      >
        Subscribe
      </button>
    </form>
  );
}
