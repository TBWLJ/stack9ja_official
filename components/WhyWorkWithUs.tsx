import React from 'react';

const WhyWorkWithUs = () => {
  const reasons = [
    {
      title: 'Collaborative Environment',
      description:
        'We foster a culture of teamwork and open communication, ensuring everyone has a voice.',
      icon: 'collaborative.png', // Add appropriate icons
    },
    {
      title: 'Career Growth',
      description:
        'We provide opportunities for continuous learning and development, helping you reach your career goals.',
      icon: 'growth.png',
    },
    {
      title: 'Innovation',
      description:
        'We encourage creative thinking and innovation, driving the future of our industry.',
      icon: 'innovation.png',
    },
    {
      title: 'Work-Life Balance',
      description:
        'We believe in a healthy work-life balance, offering flexible work arrangements.',
      icon: 'balance.png',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id='why'>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Why Work With Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover the benefits of joining our team and see how we can help you achieve your personal and professional goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <img src={reason.icon} alt={reason.title} className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{reason.title}</h2>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;