import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 40 : 0 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const PersonalPackage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-teal-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto font-sans">
      <motion.h1
        className="text-2xl sm:text-xl lg:text-5xl font-extrabold text-center text-teal-800 mb-4 mt-12 sm:mt-12"
        {...fadeIn("up", 0.1)}
      >
        🌟 Empower Your Growth
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10"
        {...fadeIn("up", 0.2)}
      >
        Master Goals, Mindset, and Habits for Lasting Change
      </motion.p>

      <motion.section className="mb-10" {...fadeIn("up", 0.3)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-4">🔍 Program Overview</h2>
        <p className="leading-relaxed text-base sm:text-lg">
          A 6-week 1:1 coaching journey designed to help you gain clarity, shift your mindset,
          build empowering habits, and unlock your true potential. Whether you're feeling stuck,
          lacking direction, or ready for the next level—you’ll walk away with sustainable tools
          for lasting personal transformation.
        </p>
      </motion.section>

      <motion.section
        className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-teal-400"
        {...fadeIn("up", 0.4)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-700">💼 What’s Included</h2>
        <ul className="pl-5 space-y-3 text-base sm:text-lg text-gray-700">
          <li>✅ 6 Weekly Coaching Sessions (60 minutes each) via Zoom</li>
          <li>✅ Personalized goal-setting framework using SMART goals</li>
          <li>✅ Mindset rewiring techniques to overcome limiting beliefs</li>
          <li>✅ Habit-building strategies rooted in neuroscience and mindfulness</li>
          <li>✅ Weekly Self-Reflection Exercises & Learning Prompts</li>
          <li>✅ WhatsApp/Email support between sessions for accountability</li>
          <li>✅ Final Growth Reflection & Action Plan (delivered at the end of Week 6)</li>
        </ul>
      </motion.section>

      <motion.section className="mb-10" {...fadeIn("up", 0.5)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-700">🧭 Weekly Breakdown</h2>
        <ol className="pl-5 ml-6  space-y-2 text-base sm:text-lg text-gray-700">
          <li>Week 1: Clarity & Vision</li>
          <li>Week 2: SMART Goal Setting</li>
          <li>Week 3: Mindset Mastery</li>
          <li>Week 4: Habit Transformation</li>
          <li>Week 5: Reflection & Growth</li>
          <li>Week 6: Integration & Next Steps</li>
        </ol>
      </motion.section>

      <motion.section
        className="mb-10 bg-teal-50 p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-teal-600"
        {...fadeIn("up", 0.6)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-700">💰 Investment Options</h2>
        <div className="space-y-6 text-base sm:text-lg text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-800">Empower Package – Standard</h3>
            <p>$750 (one-time) or 2 payments of $375</p>
            <p className="italic text-sm text-gray-500">
              Perfect for individuals ready to commit to growth with full support.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-800">Empower Package – Premium</h3>
            <p>$850</p>
            <p>
              Includes everything above + 1 Bonus Session + Personalized Growth Journal.
            </p>
            <p className="italic text-sm text-gray-500">
              Ideal for those who want extra support beyond the 6 weeks.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PersonalPackage;


