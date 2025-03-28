import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const MindfulnessCoaching = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-10">
   

      {/* Hero Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl mt-5 font-bold text-teal-700 ">Mindfulness & Spiritual Growth</h1>
          <p className="text-gray-600">
            Mindfulness is the practice of staying fully present in the moment, helping you manage stress, improve focus,
            and enhance your decision-making ability. In our sessions, you will learn tools and techniques to cultivate
            mindfulness, creating a greater sense of calm and clarity in both your professional and personal life.But beyond just stress management, mindfulness can open the door to deeper self-awareness and spiritual growth.
          </p>
          <ul className="text-teal-700 list-disc mx-5">
            <li className="font-bold">Conscious Mind <span className="text-gray-700 font-semibold">– How our conscious mind behaves.</span> </li>
            <li className="font-bold">Subconscious Mind <span className="text-gray-700 font-semibold">– How our subconscious mind works.</span></li>
            <li className="font-bold">Body <span className="text-gray-700 font-semibold">- How does our body reacts & takes action.</span></li>
            <li className="font-bold">Soul <span className="text-gray-700 font-semibold">– How our soul creates physical aspects of ourselves.</span></li>
          </ul>
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
      <h2 className="text-3xl font-semibold text-center mt-16 text-teal-700">Mindfulness Practices</h2>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Meditation Practices */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/M1.jpg" alt="Breathing Exercise" className="w-60 h-60 mx-auto rounded-full object-cover" />
          <h3 className="text-xl font-semibold mt-4">Meditation Practices</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-gray-600">
            Cultivate inner peace, increase self-awareness, and clear mental blockages for greater emotional healing and clarity.
          </p>
        </div>

        {/* Spiritual Connection */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/C1.jpg" alt="Meditation" className="w-60 h-60 mx-auto rounded-full object-fill" />
          <h3 className="text-xl font-semibold mt-4">Spiritual Connection & Inner Peace</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-gray-600">
            Mindful reflection, gratitude, and intentional stillness help align with your true self for a deeper sense of harmony.
          </p>
        </div>

        {/* Emotional Healing */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
          <img src="/m3.jpg" alt="Mindful Activities" className="w-60 h-60 mx-auto rounded-full object-cover" />
          <h3 className="text-xl font-semibold mt-4">Emotional Healing & Energy Clearing</h3>
          <hr className="my-2 border-2 border-teal-500 w-16 mx-auto" />
          <p className="text-gray-600">
            Overcome mental barriers like fear and limiting beliefs, release negative emotions, and create space for transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MindfulnessCoaching;
