// components/SubscriptionForm.jsx
import { useState } from 'react';
// import emailjs from '@emailjs/browser';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .send(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
    //     { email },
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       alert('Thanks for subscribing!');
    //       setEmail('');
    //     },
    //     (error) => {
    //       console.error('Subscription failed:', error);
    //     }
    //   );
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  );
}
