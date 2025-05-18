import React from 'react'

function Pricing() {
  return (
    <section className="bg-white/20 py-16 px-6 sm:px-16 lg:px-28">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#105153] mb-4">
          Pricing
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Explore our tailored programs to elevate your personal and professional life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Personal Development Plan */}
        <div className="bg-white border-4 border-[#105153] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-[#105153] mb-4">Personal Development</h3>
          <ul className="text-sm text-gray-700 mb-6 space-y-2  ">
            <li>✅ Momentum Through Clear Goals</li>
            <li>✅ Confidence with a Resilient Mindset</li>
            <li>✅ Inner Balance via Lasting Habits</li>
          </ul>
          <a href="/personal-package" className="mt-auto bg-[#105153] text-white py-2 px-6 rounded-full hover:scale-110 transition-all">
            Know More
          </a>
        </div>

        {/* Career Coaching Plan */}
        <div className="bg-white border-4 border-[#105153] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center ">
          <h3 className="text-2xl -ml-16 md:ml-0 font-semibold text-[#105153] mb-4">Career Coaching</h3>
          <ul className="text-sm text-gray-700 mb-6 space-y-2 ml-1 md:ml-12">
            <li>✅ Personal Brand & Strengths</li>
            <li>✅ Confident Communication Mastery</li>
            <li>✅ Reflection & Empowerment</li>
          </ul>
          <a href="/career-package" className="mt-auto bg-[#105153] hover:scale-110 text-white py-2 px-6 rounded-full transition-all">
            Know More
          </a>
        </div>

        {/* Mindfulness & Spiritual Plan */}
        <div className="bg-white border-4 border-[#105153] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-[#105153] mb-4">Mindfulness & Spiritual</h3>
          <ul className="text-sm text-gray-700 mb-6 space-y-2">
            <li>✅ Build Deep Meditation</li>
            <li>✅ Achieve Stillness. Connect Within</li>
            <li>✅ Explore Energy. Heal Deeply</li>
          </ul>
          <a href="/mindful-package" className="mt-auto bg-[#105153] text-white py-2 px-6 rounded-full hover:scale-110 transition-all">
            Know More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

