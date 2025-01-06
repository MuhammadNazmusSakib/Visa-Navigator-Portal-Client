import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    const slides = [
      {
        id: 1,
        title: "Simplify Your Visa Process",
        description: "Navigating complex visa procedures is now easier than ever. With our user-friendly platform, you’ll receive step-by-step guidance, personalized recommendations, and essential document checklists to ensure a hassle-free experience.",
        image: "https://i.ibb.co.com/x5QKCwL/Simplify-Your-Visa-Process.jpg",
      },
      {
        id: 2,
        title: "Explore All Visa Options",
        description: "Discover the visa type that suits your needs, whether it's for travel, study, or work. Our comprehensive database provides detailed information on eligibility, requirements, and application processes for various countries and visa categories.",
        image: "https://i.ibb.co.com/KLyk2Bc/pexels-olly-3769146.jpg",
      },
      {
        id: 3,
        title: "Real-Time Application Tracking",
        description: "Stay updated at every stage of your visa journey. Our real-time tracking system lets you monitor your application’s progress and receive timely notifications, ensuring you’re always informed and prepared.",
        image: "https://i.ibb.co.com/J34PVPz/pexels-lara-jameson-8828584.jpg",
      },
    ];
  
    return (
      <div className="banner w-full bg-gray-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[400px] flex items-center justify-center text-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bg-black bg-opacity-50 p-4 rounded-lg text-center max-w-4xl">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Banner;
  