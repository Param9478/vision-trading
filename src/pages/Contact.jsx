// pages/Contact.jsx
import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Uncomment when ready to implement email functionality
    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setIsSubmitted(true);
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.error('Error sending message:', error);
    //       alert('Failed to send message. Please try again.');
    //     }
    //   );

    // For demo purposes, reset the form
    form.current.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>

        {/* Contact Info */}
        <div className="mb-10 bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-gray-700 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-medium">Email</h3>
              <p className="text-gray-400 mt-1">tradewithscholar@gmail.com</p>
            </div>

            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-gray-700 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-gray-400 mt-1">+91 623 9654 863</p>
            </div>

            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-gray-700 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-medium">Location</h3>
              <p className="text-gray-400 mt-1">Jalandhar, India</p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-900 text-green-300 p-4 rounded-lg mb-6">
            Thank you for your message! We&apos;ll respond as soon as possible.
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
      </div>
    </div>
  );
}
