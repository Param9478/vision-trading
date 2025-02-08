// pages/Contact.jsx
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       alert('Message sent successfully!');
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.error('Error sending message:', error);
    //     }
    //   );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-gray-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-gray-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-gray-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
