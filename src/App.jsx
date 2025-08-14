import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import KaraLogo from "./assets/KaraLogo1.png"; // Import logo from assets

function App() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for header titles
  const titleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, color: "#7C3AED", transition: { duration: 0.3 } }, // Updated to accent purple
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-indigo-900 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={KaraLogo} alt="KARA Logo" className="h-12" />
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="https://kara-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500 transition-colors duration-300"
                >
                  Enter dApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="bg-gradient-to-r from-indigo-900 to-indigo-700 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold mb-4"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            <img src={KaraLogo} alt="KARA Logo" className="h-16 mx-auto" />
            Decentralized Marketplace
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Seamless exchange of real goods and services for cryptocurrency.
            Secure, efficient, and user-friendly – access with just a browser
            and wallet.
          </motion.p>
          <a
            href="https://kara-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-500 transition-transform duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </motion.section>

      {/* Why KARA? (Benefits) */}
      <motion.section
        id="benefits"
        className="py-16 bg-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Why KARA?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reduced Costs",
                desc: "Eliminate intermediaries to lower transaction fees and operational costs.",
              },
              {
                title: "Increased Transparency",
                desc: "Blockchain ensures open and verifiable transactions, fostering trust.",
              },
              {
                title: "Enhanced Security",
                desc: "Decentralization and smart contracts make the platform resilient to attacks.",
              },
              {
                title: "Greater User Control",
                desc: "Full control over data, keys, and transactions with non-custodial wallets.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        className="py-16 bg-indigo-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Explore Our Powerful Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Security & Escrow",
                desc: "Smart contracts and encryption protect transactions; escrow holds funds until delivery.",
              },
              {
                title: "Transparency",
                desc: "Publicly verifiable transaction history for every product.",
              },
              {
                title: "Easy Onboarding",
                desc: "Wallet-based authentication with MetaMask or WalletConnect.",
              },
              {
                title: "Product Listing",
                desc: "List items with metadata, prices, and media files.",
              },
              {
                title: "Cryptocurrency Payments",
                desc: "Support for ETH, BNB, USDT/USDC with secure escrow.",
              },
              {
                title: "Monetization",
                desc: "Revenue through transaction commission fees.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Roadmap / Future Plans */}
      <motion.section
        id="roadmap"
        className="py-16 bg-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Roadmap & Future Plans
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: "Negotiate Before Pay",
                desc: "Chat box integration with WebSocket for buyer-seller negotiations.",
              },
              {
                title: "Full Decentralization",
                desc: "Store all transactions on-chain with advanced blockchain tech.",
              },
              {
                title: "Marketplace Tokens & DAO",
                desc: "Introduce tokens for governance, incentives, and rewards.",
              },
              {
                title: "Referral System",
                desc: "Earn rewards for successful referrals.",
              },
              {
                title: "Reputation System",
                desc: "Decentralized reviews with token rewards for positive contributions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Documentation Section */}
      <motion.section
        id="docs"
        className="py-16 bg-indigo-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            KARA Documentation
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Project Overview",
                desc: (
                  <>
                    KARA is a decentralized marketplace dApp for trading goods
                    and services with cryptocurrency on EVM-compatible
                    blockchains. It offers a secure, efficient, and
                    user-friendly platform accessible via a browser with a
                    crypto wallet. Visit:{" "}
                    <a
                      href="https://kara-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      kara-frontend.vercel.app
                    </a>
                    .
                  </>
                ),
              },
              {
                title: "Goals and Mission",
                desc: (
                  <>
                    <p>
                      <strong>Goal:</strong> Create a secure platform for
                      seamless crypto-based trading.
                    </p>
                    <p>
                      <strong>Mission:</strong> Make cryptocurrency transactions
                      accessible, reliable, and as intuitive as fiat
                      transactions.
                    </p>
                  </>
                ),
              },
              {
                title: "Architecture",
                desc: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Smart Contracts:</strong> Automate transactions
                      and ensure security with escrow.
                    </li>
                    <li>
                      <strong>Non-Custodial Wallets:</strong> Users control
                      private keys and funds.
                    </li>
                    <li>
                      <strong>Marketplace:</strong> Connects buyers and sellers
                      under one platform.
                    </li>
                    <li>
                      <strong>Web Interface:</strong> User-friendly design for
                      accessibility.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Key Features",
                desc: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Security:</strong> Smart contracts and encryption;
                      escrow for safe transactions.
                    </li>
                    <li>
                      <strong>Transparency:</strong> Publicly verifiable
                      transaction history.
                    </li>
                    <li>
                      <strong>Onboarding:</strong> Wallet-based authentication
                      (MetaMask, WalletConnect).
                    </li>
                    <li>
                      <strong>Product Listing:</strong> Sellers list items with
                      metadata.
                    </li>
                    <li>
                      <strong>Payments:</strong> Supports ETH, BNB, USDT/USDC
                      with escrow.
                    </li>
                    <li>
                      <strong>Monetization:</strong> Revenue via transaction
                      commission fees.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Benefits to Society",
                desc: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Reduced Costs:</strong> No intermediaries, lower
                      fees.
                    </li>
                    <li>
                      <strong>Transparency:</strong> Blockchain fosters trust.
                    </li>
                    <li>
                      <strong>Security:</strong> Decentralized and resilient to
                      attacks.
                    </li>
                    <li>
                      <strong>User Control:</strong> Full control over data and
                      transactions.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Future Plans",
                desc: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Negotiation System:</strong> WebSocket chat for
                      buyer-seller negotiations.
                    </li>
                    <li>
                      <strong>Full Decentralization:</strong> On-chain
                      transaction storage.
                    </li>
                    <li>
                      <strong>Tokens & DAO:</strong> Governance and incentives
                      via tokens.
                    </li>
                    <li>
                      <strong>Referral System:</strong> Token rewards for
                      referrals.
                    </li>
                    <li>
                      <strong>Reputation System:</strong> Decentralized reviews
                      with token rewards.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Tools and Frameworks",
                desc: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Blockchain:</strong> Ethereum, BSC, Polygon,
                      Solana; Layer 2 for scalability.
                    </li>
                    <li>
                      <strong>Smart Contracts:</strong> Solidity for EVM
                      platforms.
                    </li>
                    <li>
                      <strong>Frontend:</strong> React.js, deployed on Vercel.
                    </li>
                    <li>
                      <strong>Backend:</strong> Node.js/Express.js, deployed on
                      Render.
                    </li>
                    <li>
                      <strong>Database:</strong> MongoDB (off-chain).
                    </li>
                    <li>
                      <strong>Wallet Integration:</strong> Wagmi and RainbowKit
                      for seamless wallet connections.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Conclusion",
                desc: "KARA revolutionizes crypto-based trading with security, efficiency, and accessibility, empowering users to integrate cryptocurrency into daily life.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                {item.desc}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://kara-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-500 transition-transform duration-300 hover:scale-105"
            >
              Explore the dApp
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-indigo-950 py-8 text-center">
        <img src={KaraLogo} alt="KARA Logo" className="h-10 mx-auto mb-4" />
        <p>&copy; 2025 KARA. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://kara-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline mx-2 transition-colors duration-300"
          >
            Main dApp
          </a>
          <a
            href="#docs"
            className="text-purple-400 hover:underline mx-2 transition-colors duration-300"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
