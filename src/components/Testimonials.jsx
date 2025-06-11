import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // If width is less than 768px, it's mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-2xl md:text-5xl font-bold text-[#105153] mb-6 md:mb-8">
          Success Stories
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
           navigation={isMobile ? false : true} 
          pagination={{ clickable: !isMobile }} // Disable pagination dots on mobile
          loop={true}
          autoplay={isMobile ? false : { delay: 2000 }} // Disable autoplay on mobile
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full relative"
        >
          {/* Video Testimonial 1 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg">
                <video
                  className="w-full max-h-100  rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/Review.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Video Testimonial 2 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/testimonial2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>
          {/* Video Testimonial 3 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Video Testimonial 4 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full  md:mt-15 max-w-lg">
                <video
                  className="w-full max-h-100 rounded-lg shadow-lg"
                  controls
                  muted
                >
                  <source src="/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>

          {/* Text Testimonial 1 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">

                {/* User Photo */}
                <div className="flex flex-col items-center justify-center  gap-2 mb-1">
                  <img
                    src="/ola.jpg" // Update with actual image path
                    alt="Ola Dayoub"
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#105153]">
                      Ola Dayoub
                    </h3>
                    <p className="text-sm text-gray-500">Prague, Czech Republic</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-base md:text-md text-gray-700 leading-relaxed">
                  "I met Sachin on a Facebook group about coaching. He offered 3
                  free coaching sessions. At that time I felt that was exactly
                  what I needed. The great clarity of mind after the first
                  session convinced me that I had to continue the sessions.
                  Sachin challenged me with difficult questions and managed the
                  sessions in a way that made every minute very effective. Thus,
                  after three sessions, I have a clearer mind, and I am more
                  aware of what I have to do regarding the weak points in my
                  life. I feel empowered and more determined to be conscious of
                  my everyday habits in order to reach my goals."
                </p>
              </div>
            </div>
          </SwiperSlide>


          {/* Text Testimonial 2 */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center h-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">

                {/* User Photo */}
                <div className="flex flex-col items-center justify-center  gap-2 mb-1">
                  <img
                    src="/nopp.jpg" // Update with actual image path
                    alt="Ola Dayoub"
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#105153]">
                     Manuela Ramírez Rodríguez
                    </h3>
                    <p className="text-sm text-gray-500"> Wellness Coach, Bogotá D.C., Colombia</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-base md:text-md text-gray-700 leading-relaxed">
                  "My experience with Sachin as a coach has been exceptional. He
                  inspires trust quickly and is respectful from the start. His
                  kindness comes through with every question and every question
                  helped me dig deeper into my reality and heal what I needed
                  to, to find my way and grow in my personal venture. I have
                  been able to change my behaviors and thoughts in a short
                  period of time, thanks to Sachin's guidance. I would recommend
                  his services to anyone in need of guidance either with a
                  specific purpose or seeking to find it. Thank you Sachin, I am
                  very grateful to you, you've helped me so much to dig deep."

                </p>
              </div>
            </div>
          </SwiperSlide>



        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
