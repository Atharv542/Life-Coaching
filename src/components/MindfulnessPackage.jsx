import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 40 : 0 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const MindfulnessPackage = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-emerald-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-14 max-w-6xl mx-auto font-sans">

      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mt-12 text-teal-900 mb-4"
        {...fadeIn("up", 0.1)}
      >
        🌿 Awaken Your Soul
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10"
        {...fadeIn("up", 0.2)}
      >
        Calm the Mind • Heal the Heart • Align the Soul
      </motion.p>

      {/* Program Overview */}
      <motion.section className="mb-12" {...fadeIn("up", 0.3)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">🧘 Program Overview</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          A 6-week transformational coaching experience for individuals seeking inner peace,
          clarity, and deep spiritual alignment. Let go of what no longer serves you and reconnect
          with your true self through mindfulness, energy work, and soulful practices.
        </p>
      </motion.section>

      {/* What You'll Gain */}
      <motion.section className="mb-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-emerald-300" {...fadeIn("up", 0.4)}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-800 mb-4">🌟 What You’ll Gain</h2>
        <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg text-gray-700">
          <li>Daily calm and clarity through guided mindfulness</li>
          <li>Emotional healing and energetic balance</li>
          <li>Reconnection with your authentic self and purpose</li>
          <li>Tools to quiet the mind and release limiting beliefs</li>
          <li>Alignment of conscious, subconscious, body, and soul</li>
        </ul>
      </motion.section>

      {/* What's Included */}
      <motion.section className="mb-12 bg-emerald-50 p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500" {...fadeIn("up", 0.5)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-900">💫 What’s Included</h2>
        <ul className=" pl-5  space-y-3 text-base sm:text-lg text-gray-700">
          <li>✅ 6 Weekly 1:1 Coaching Sessions (60 minutes via Zoom)</li>
          <li>✅ Meditation & Breathwork Practices for peace and healing</li>
          <li>✅ Spiritual Connection Sessions: Gratitude & soulful alignment</li>
          <li>✅ Energy Clearing & Emotional Healing Techniques</li>
          <li>✅ Mind & Subconscious Rewiring for new belief formation</li>
          <li>✅ Body Awareness Exercises: Grounding & energizing</li>
          <li>✅ Mindfulness Journal Prompts & Guided Audio Meditations</li>
          <li>✅ Between-session voice note or email support</li>
        </ul>
      </motion.section>

      {/* Weekly Focus */}
      <motion.section className="mb-12" {...fadeIn("up", 0.6)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-800">📅 Weekly Focus</h2>
        <ol className=" pl-5 ml-6 space-y-2 text-base sm:text-lg text-gray-700">
          <li>Week 1: Awareness & Grounding (Conscious Mind)</li>
          <li>Week 2: Meditation & Breathwork Foundations</li>
          <li>Week 3: Subconscious Rewiring & Energy Healing</li>
          <li>Week 4: Gratitude, Reflection & Spiritual Connection</li>
          <li>Week 5: Mindful Body Practices & Emotional Healing</li>
          <li>Week 6: Integration, Alignment & Your Soulful Vision</li>
        </ol>
      </motion.section>

      {/* Investment Options */}
      <motion.section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-emerald-600" {...fadeIn("up", 0.7)}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-900">💰 Investment Options</h2>
        <div className="space-y-6 text-base sm:text-lg text-gray-700">
          <div className="p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-900">Awaken Your Soul – Standard Package</h3>
            <p>$900 (or 2 payments of $450)</p>
            <p className="italic text-sm text-gray-600">
              Includes full 6-week journey, tools, journal prompts, and voice support.
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg sm:text-xl text-teal-900">Awaken Your Soul – Premium Package</h3>
            <p>$1000</p>
            <p>
              Everything in the Standard Package plus:
              <ul className=" pl-6 mt-2 space-y-1">
                <li>🔹 1 Bonus Private Healing Session (30 mins)</li>
                <li>🔹 Personalized Meditation Recording</li>
                <li>🔹 Lifetime access to all guided audio practices</li>
                <li>🔹 Priority support (Mon–Fri)</li>
              </ul>
            </p>
          </div>
          
        </div>
        
      </motion.section>
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

export default MindfulnessPackage;
