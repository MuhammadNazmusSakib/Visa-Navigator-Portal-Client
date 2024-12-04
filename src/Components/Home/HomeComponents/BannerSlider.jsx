import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components for navigation
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700 z-10"
    onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700 z-10"
    onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const BannerSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  // Array of images for the slider
  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co/LP9qTcL/1.jpg',
      caption: 'Simplify Your Visa Process',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/56cvwxH/2.jpg',
      caption: 'Explore All Visa Options',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/zxJ5fWF/3.jpg',
      caption: 'Real-Time Application Tracking',
    },
  ];

  return (
    <section className="w-full bg-gray-900 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Adjusting the height of the image container */}
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-[500px] object-cover"
              style={{ maxHeight: '500px' }}
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold text-center">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
