// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-bold mb-4">
              Trade with Scholars
            </h3>
            <p className="text-sm">
              Empowering traders with advanced tools and education.
            </p>
          </div>

          <div className="text-center sm:items-start">
            <h4 className="text-white mb-4 font-semibold text-center">
              Products
            </h4>
            <ul className="flex space-x-4 text-sm">
              <li>
                <a
                  href="/bots"
                  className="hover:text-blue-500 transition-colors"
                >
                  Trading Bots
                </a>
              </li>
              <li>
                <a
                  href="/charts"
                  className="hover:text-blue-500 transition-colors"
                >
                  Live Charts
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  className="hover:text-blue-500 transition-colors"
                >
                  Courses
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <p className="text-sm">
              <a
                href="mailto:support@tradewithscholars.com"
                className="hover:text-blue-500 transition-colors"
              >
                tradewithscholar@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:+916239654863"
                className="hover:text-blue-500 transition-colors"
              >
                +91 (623) 965-4863
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Trade with Scholars. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
