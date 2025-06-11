import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const MindfulnessCoaching = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-10">
         <IoArrowBackCircleOutline 
    className="text-5xl text-teal-700 cursor-pointer -mx-3 mt-14 hidden md:block " 
    onClick={() => navigate(-1)} 
  />

      {/* Hero Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">

        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl mt-8 md:-mt-10 font-bold text-teal-700 ">Mindfulness & Spiritual Growth</h1>
          <p className="text-gray-600">
          <span className="font-bold text-gray-800 italic text-lg">Awaken Your Soul: Cultivating Mindfulness for Spiritual Harmony.</span><br/>
          You’ll learn to slow down, be fully present, and navigate life with calm and clarity. You’ll be guided through simple, powerful mindfulness practices that help reduce stress, sharpen your focus, and improve decision-making. Beyond just managing the chaos, together we’ll uncover deeper self-awareness and unlock a sense of inner peace and purpose both at work and at home.
          </p>
          <ul className="text-teal-700 list-disc mx-5">
            <li className="font-bold">Conscious Mind <span className="text-gray-700 font-semibold">– You’ll think with clarity and with guidance you can make intentional choices</span> </li>
            <li className="font-bold">Subconscious Mind <span className="text-gray-700 font-semibold">– You’ll break old patterns and with guidance you can rewire your mindset.</span></li>
            <li className="font-bold">Body <span className="text-gray-700 font-semibold">- You’ll tune into your body and with guidance you can act with purpose.</span></li>
            <li className="font-bold">Soul <span className="text-gray-700 font-semibold">– You’ll connect with your soul and with guidance you will discover your inner truth.</span></li>
          </ul>
          <motion.p className="text-gray-600 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Mind, Body & Soul-My mind is brilliant,my body is healthy & my soul is calm."
          </motion.p>
          <button
            className="bg-teal-600 text-white cursor-pointer px-6 py-2 mt-3 rounded-lg hover:bg-teal-700 transition"
            onClick={() => navigate("/booking")}
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/M-main.jpg"
            alt="Mindfulness"
            className="rounded-lg shadow-lg w-full h-auto mt-14 object-cover "
          />
        </div>
      </div>

      {/* Mindfulness Practices Section */}
      <h2 className="text-4xl font-bold text-center mt-16 text-teal-700">Calm The Mind • Heal The Heart • Align The Soul</h2>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Meditation Practices */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/M1.jpg" alt="Breathing Exercise" className="w-60 h-60 mx-auto rounded-full object-cover" />
          <h3 className="text-2xl font-semibold mt-4">Build Deep Meditation</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-lg text-gray-600">
          I’ll guide you to find your calm, heal from within, and gain clarity because with meditation, you unlock peace and purpose, one breath at a time.

          </p>
        </div>

        {/* Spiritual Connection */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/C1.jpg" alt="Meditation" className="w-60 h-60 mx-auto rounded-full object-fill" />
          <h3 className="text-2xl font-semibold mt-4">Achieve Stillness Connect Within</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-lg text-gray-600">
          You’ll discover deeper peace and purpose. You’ll be guided through mindful reflection and gratitude to reconnect with your true self and feel truly aligned.
          </p>
        </div>

        {/* Emotional Healing */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/m3.jpg" alt="Mindful Activities" className="w-60 h-60 mx-auto rounded-full object-cover" />
          <h3 className="text-2xl font-semibold mt-4">Explore Energy. Heal Deeply</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-lg text-gray-600">
          You’ll release what’s holding you back. I’ll help you clear emotional blocks and limiting beliefs so you can heal, grow, and thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MindfulnessCoaching;
