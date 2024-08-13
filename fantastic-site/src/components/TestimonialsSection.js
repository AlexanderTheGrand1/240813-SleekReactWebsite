import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    { name: 'John Doe', text: 'This site changed my life!' },
    { name: 'Jane Smith', text: 'An amazing experience, highly recommend.' },
    { name: 'Bob Johnson', text: 'Fantastic service and support.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enables automatic sliding
    autoplaySpeed: 3000,       // Delay between slides (in milliseconds)
  };

  return (
    <div className="testimonials-container">
      <h2>What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p>"{testimonial.text}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSection;
