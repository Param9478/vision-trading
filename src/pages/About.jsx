// pages/About.jsx
export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">About Us</h1>

        <div className="space-y-6 text-gray-300">
          <p>
            At VisionTrading, we are passionate about empowering traders with
            the tools and knowledge they need to succeed in the financial
            markets. Our mission is to democratize trading by providing
            cutting-edge technology and educational resources.
          </p>

          <p>
            Founded in 2023 by a team of experienced traders and software
            engineers, VisionTrading combines the power of artificial
            intelligence with proven trading strategies to deliver exceptional
            results.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Transparency:</strong> We believe in open and honest
              communication with our users.
            </li>
            <li>
              <strong>Innovation:</strong> Constantly pushing the boundaries of
              what&apos;s possible in trading technology.
            </li>
            <li>
              <strong>Education:</strong> Empowering traders through
              comprehensive learning resources.
            </li>
            <li>
              <strong>Integrity:</strong> Building trust through ethical
              practices and reliable tools.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white">Rahul Sharma</h3>
              <p className="text-gray-400">CEO & Founder</p>
              <p className="mt-2 text-sm">
                With over 10 years of experience in algorithmic trading, John
                leads the VisionTrading team with a focus on innovation and user
                success.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white">Parminder Singh</h3>
              <p className="text-gray-400">Co-Founder</p>
              <p className="mt-2 text-sm">
                Jane is responsible for creating the educational content that
                helps traders of all levels improve their skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
