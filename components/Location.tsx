import React from 'react';

const Location = () => {
  const contacts = [
    {
      title: 'Call Us',
      type: 'phone',
      info: ['+2348120940814', '+2348141242512'],
      bg: 'bg-red-200',
      href: 'tel:+2348120940814',
    },
    {
      title: 'Email Us',
      type: 'email',
      info: ['devjtaiwo@gmail.com'],
      bg: 'bg-blue-200',
      href: 'mailto:devjtaiwo@gmail.com',
    },
    {
      title: 'Ghana Office',
      type: 'location',
      info: ['Tema Express Road, Along Tema Sea Port, Accra, Ghana'],
      bg: 'bg-green-200',
    },
    {
      title: 'Ogbomoso Office',
      type: 'location',
      info: ['1500LT Junction, Under G Lautech Area, Ogbomoso, Oyo State, Nigeria'],
      bg: 'bg-green-200',
    },
    {
      title: 'Asipa Office',
      type: 'location',
      info: ['Asipa-Akinlalu Express Road, Asipa, Ife North, Osun State, Nigeria'],
      bg: 'bg-red-200',
    },
  ];

  return (
    <>
      <div className="text-center mt-28">
        <h1 className="text-3xl font-bold">Our Contacts</h1>
      </div>

      <section className="flex flex-wrap justify-center px-5 py-10 gap-6">
        {contacts.map((contact, idx) => (
          <div
            key={idx}
            className={`${contact.bg} w-full sm:w-80 lg:w-72 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="font-bold text-xl uppercase">{contact.title}</h2>
            {contact.type === 'phone' || contact.type === 'email' ? (
              <a
                href={contact.href}
                className="mt-4 text-lg hover:text-blue-700 transition-colors"
              >
                {contact.info.map((i, index) => (
                  <span key={index}>
                    {i}
                    {index < contact.info.length - 1 && <br />}
                  </span>
                ))}
              </a>
            ) : (
              <p className="mt-4 text-lg">{contact.info}</p>
            )}
          </div>
        ))}
      </section>

      <hr className="my-16" />

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Send Us a Message</h1>
      </div>

    </>
  );
};

export default Location;