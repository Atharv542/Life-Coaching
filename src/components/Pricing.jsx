import React from 'react'

function Pricing() {
  return (
    <section className="bg-white/20 py-16 px-6 sm:px-16 lg:px-28">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-[#105153] mb-4">Pricing Plans</h2>
    <p className="text-gray-600 text-base sm:text-lg">
      Choose a plan that fits your personal growth journey. No hidden fees — just value-driven transformation.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Starter Plan */}
    <div className="bg-white border-4 border-[#105153] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-[#105153] mb-4">Starter</h3>
      <p className="text-4xl font-bold text-[#105153] mb-2">₹999</p>
      <p className="text-gray-600 mb-6">Single Session (45 mins)</p>
      <ul className="text-sm text-gray-700 mb-6 space-y-2 text-center">
        <li>✔ Personalized Guidance</li>
        <li>✔ Mindfulness Tips</li>
        <li>✔ Flexible Scheduling</li>
      </ul>
      <a href="/booking" className="mt-auto bg-[#105153] text-white py-2 px-6 rounded-full hover:scale-110 transition-all">
        Book Now
      </a>
    </div>

    {/* Growth Plan */}
    <div className="bg-white border-4 border-[#105153] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center ">
      <h3 className="text-2xl font-semibold text-[#105153] mb-4">Growth</h3>
      <p className="text-4xl font-bold text-[#105153] mb-2">₹4499</p>
      <p className="text-gray-600 mb-6">5 Sessions Pack</p>
      <ul className="text-sm text-gray-700 mb-6 space-y-2 text-center">
        <li>✔ Deeper Coaching</li>
        <li>✔ Customized Workbook</li>
        <li>✔ Accountability Follow-up</li>
      </ul>
      <a href="/booking" className="mt-auto bg-[#105153] hover:scale-110 text-white py-2 px-6 rounded-full  transition-all">
        Book Now
      </a>
    </div>

    {/* Premium Plan */}
    <div className="bg-white border-4 border-[#105153] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-[#105153] mb-4">Transformation</h3>
      <p className="text-4xl font-bold text-[#105153] mb-2">₹8999</p>
      <p className="text-gray-600 mb-6">10 Sessions + Bonuses</p>
      <ul className="text-sm text-gray-700 mb-6 space-y-2 text-center">
        <li>✔ Full Growth Plan</li>
        <li>✔ Priority Scheduling</li>
        <li>✔ 1:1 Support + Progress Tracker</li>
      </ul>
      <a href="/booking" className="mt-auto  bg-[#105153] text-white py-2 px-6 rounded-full hover:scale-110 transition-all">
        Book Now
      </a>
    </div>
  </div>
</section>

  )
}

export default Pricing