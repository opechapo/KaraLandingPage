import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import KaraLogo from "./assets/KaraLogo1.png";

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
    hover: { scale: 1.05, color: "#A78BFA", transition: { duration: 0.3 } }, // Brighter purple for hover
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
                  className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-400 transition-colors duration-300"
                >
                  Enter dApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Blockchain Effect */}
      <motion.section
        id="home"
        className="relative bg-gradient-to-r from-purple-600 to-blue-500 py-16 text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Blockchain Effect Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="blockchain-nodes">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="node"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <motion.h2
            className="text-5xl font-bold mb-4 text-white"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            <img src={KaraLogo} alt="KARA Logo" className="h-16 mx-auto" />
            KARA: Decentralized Marketplace
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Trade goods and services with cryptocurrency securely and
            effortlessly. KARA’s blockchain-powered platform ensures
            transparency, low fees, and user control—all from your browser with
            a crypto wallet.
          </motion.p>
          <a
            href="https://kara-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-400 px-6 py-3 rounded-lg text-lg text-white hover:bg-purple-300 transition-transform duration-300 hover:scale-105"
          >
            Start Trading Now
          </a>
        </div>
      </motion.section>

      {/* Why KARA? (Benefits) */}
      <motion.section
        id="benefits"
        className="py-12 bg-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Why Choose KARA?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Low Costs",
                desc: "No intermediaries, minimizing transaction fees.",
              },
              {
                title: "Transparent",
                desc: "Blockchain ensures verifiable, open transactions.",
              },
              {
                title: "Secure",
                desc: "Smart contracts and escrow protect your trades.",
              },
              {
                title: "User Control",
                desc: "Non-custodial wallets give you full control.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        className="py-12 bg-indigo-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Secure Transactions",
                desc: "Smart contracts and escrow ensure safe trades.",
              },
              {
                title: "Easy Access",
                desc: "Connect with MetaMask or WalletConnect.",
              },
              {
                title: "Crypto Payments",
                desc: "Pay with ETH, BNB, USDT, or USDC.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section
        id="roadmap"
        className="py-12 bg-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Future Plans
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Negotiation Chat",
                desc: "WebSocket-based chat for buyer-seller deals.",
              },
              {
                title: "Full Decentralization",
                desc: "Store all transactions on-chain.",
              },
              {
                title: "Tokens & DAO",
                desc: "Governance and rewards via marketplace tokens.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Documentation */}
      <motion.section
        id="docs"
        className="py-12 bg-indigo-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
          >
            Documentation
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Overview",
                desc: (
                  <>
                    KARA is a decentralized marketplace for trading goods and
                    services with cryptocurrency on EVM blockchains. Access it
                    at{" "}
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
                title: "Mission",
                desc: "Enable secure, accessible crypto trading as intuitive as fiat.",
              },
              {
                title: "Tech Stack",
                desc: "Built with React.js, Solidity, Node.js, MongoDB, and wallet integrations (Wagmi, RainbowKit).",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-indigo-800 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
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
