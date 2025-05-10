import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 40 : 0 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const CareerPackage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-teal-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto font-sans">
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-teal-800 mt-12 mb-4"
        {...fadeIn("up", 0.1)}
      >
        🚀 From Stuck to Soaring
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10"
        {...fadeIn("up", 0.2)}
      >
        Career Growth Strategies Designed for Your Next Big Move
      </motion.p>

      {/* Program Overview */}
      <motion.section className="mb-12" {...fadeIn("up", 0.3)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-4">✨ Program Overview</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          An 8-week 1:1 career coaching journey for professionals who feel unfulfilled, uncertain, or stuck—
          and are ready to gain clarity, own their strengths, and confidently create a career path that energizes
          and empowers them.
        </p>
      </motion.section>

      {/* What You'll Gain */}
      <motion.section className="mb-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-teal-400" {...fadeIn("up", 0.4)}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-700 mb-4">💼 What You’ll Gain</h2>
        <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg text-gray-700">
          <li>Clarity on your ideal career path and next steps</li>
          <li>A powerful personal brand that sets you apart</li>
          <li>Refined leadership and communication skills</li>
          <li>Tools to silence self-doubt and procrastination</li>
          <li>Enhanced emotional intelligence for thriving in any workplace</li>
          <li>A step-by-step career roadmap tailored to your goals</li>
        </ul>
      </motion.section>

      {/* Package Includes */}
      <motion.section className="mb-12 bg-teal-50 p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-teal-500" {...fadeIn("up", 0.5)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-800">🗂️ Package Includes</h2>
        <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg text-gray-700">
          <li>✅ 8 Weekly 1:1 Coaching Sessions (60 mins each via Zoom)</li>
          <li>✅ Clarity & Vision Session: Define your ideal career and eliminate blockers</li>
          <li>✅ Leadership & Professional Development Coaching</li>
          <li>✅ Personal Brand Development: Strengths, values, and authentic presence</li>
          <li>✅ Communication Masterclass for confidence and influence</li>
          <li>✅ Emotional Intelligence Training: Awareness and resilience</li>
          <li>✅ Custom Career Roadmap with weekly goals & milestones</li>
          <li>✅ Between-session support via WhatsApp or Email</li>
          <li>✅ Final Reflection & Empowerment Plan</li>
        </ul>
      </motion.section>

      {/* Weekly Focus */}
      <motion.section className="mb-12" {...fadeIn("up", 0.6)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-700">📅 Weekly Focus Areas</h2>
        <ol className="list-decimal pl-5 space-y-2 text-base sm:text-lg text-gray-700">
          <li>Week 1: Career Clarity & Vision Mapping</li>
          <li>Week 2: Uncover Strengths & Core Values</li>
          <li>Week 3: Professional Branding & Presence</li>
          <li>Week 4: Leadership & Communication Skills</li>
          <li>Week 5: Emotional Intelligence Training</li>
          <li>Week 6: Strategy, Milestones & Roadmap Building</li>
          <li>Week 7: Confidence, Mindset & Execution</li>
          <li>Week 8: Final Review, Empowerment Plan & Beyond</li>
        </ol>
      </motion.section>

      {/* Investment Options */}
      <motion.section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-teal-600" {...fadeIn("up", 0.7)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-800">💰 Investment Options</h2>
        <div className="space-y-6 text-base sm:text-lg text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-800">Stuck to Soaring – Standard Package</h3>
            <p>$1200 (or 2 payments of $600)</p>
            <p className="italic text-sm text-gray-600">
              Includes full 8-week experience, customized roadmap, and resources.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-800">Stuck to Soaring – VIP Package</h3>
            <p>$1300</p>
            <p>
              Everything in the Standard Package plus:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>🔹 1 Bonus Session (within 2 months post-program)</li>
                <li>🔹 Personalized Strengths & Brand Report</li>
                <li>🔹 Priority Voice Note Support (Mon–Fri)</li>
              </ul>
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Button */}
      <motion.div className="text-center mt-12" {...fadeIn("up", 0.8)}>
        <a
          href="/booking" // Change to your actual booking or contact link
          className="inline-block px-6 py-3 text-white bg-teal-700 hover:bg-teal-800 transition rounded-md cursor-pointer text-xl  sm:text-lg font-semibold shadow-lg"
        >
          Connect Now
        </a>
      </motion.div>
    </div>
  );
};

export default CareerPackage;

