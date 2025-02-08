// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">VisionTrading</h3>
            <p className="text-sm">
              Empowering traders with advanced tools and education.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/bots" className="hover:text-white">
                  Trading Bots
                </a>
              </li>
              <li>
                <a href="/charts" className="hover:text-white">
                  Live Charts
                </a>
              </li>
              <li>
                <a href="/education" className="hover:text-white">
                  Courses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/risk" className="hover:text-white">
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <p className="text-sm">support@visiontrading.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} VisionTrading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
