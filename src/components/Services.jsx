import { useNavigate } from 'react-router-dom';


const Services = () => {

  const navigate= useNavigate();

  return (
    <section className="mx-auto px-6">
    <h1 className="text-4xl font-bold text-center text-[#105153] mb-16 animate-fade-in">
      Our Services
    </h1>
    
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Service Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="h-auto overflow-hidden">
            <img
              src="/Personal5.jpg"
              alt="Personal Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#105153]">Personal Development</h3>
            <p className="text-gray-600 mb-4">
              Unlocking Your Potential: Transforming Dreams into Achievable Realities.
            </p>
            <button
              className="text-[#105153] underline cursor-pointer"
              onClick={() => navigate("/personalDevelopment")}
            >
              Know More
            </button>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="h-auto overflow-hidden">
            <img
              src="/CareerCoaching2.jpg"
              alt="Career Coaching"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#105153]">Career & Executive Presence</h3>
            <p className="text-gray-600 mb-4">
              Command Your Success: Cultivating Executive Presence for Leadership Impact.
            </p>
            <button
              className="text-[#105153] underline cursor-pointer"
              onClick={() => navigate("/careerCoaching")}
            >
              Know More
            </button>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="h-auto overflow-hidden">
            <img
              src="/Mindfull3.jpg" 
              alt="Mindfulness and Spiritual"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#105153]">Mindfulness and Spiritual</h3>
            <p className="text-gray-600 mb-4">
              Awaken Your Soul: Cultivating Mindfulness for Spiritual Harmony.
            </p>
            <button
              className="text-[#105153] underline cursor-pointer"
              onClick={() => navigate("/mindfullCoaching")}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Services;