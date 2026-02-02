import React from 'react';

const Form = () => {
  return (
    <section className='flex justify-center p-4'>
      <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-semibold' htmlFor="name">Name:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="fullname"
              id="name"
              placeholder='John Doe'
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="email">Email:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="email"
              name="email"
              id="email"
              placeholder='Your Work Email'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div>
            <label className='text-sm font-semibold' htmlFor="request">Request Type:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="request"
              id="request"
              placeholder='Your Request Heading'
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="phone">Phone Number:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="number"
              name="phone"
              id="phone"
              placeholder='Mobile Number'
            />
          </div>
        </div>

        <div className='mt-5'>
          <label className='text-sm font-semibold' htmlFor="statement">Query:</label>
          <textarea
            name="statement"
            className='border w-full h-32 outline-none p-4 mt-2'
            id="statement"
            placeholder='Your Enquiry Here'
          ></textarea>
        </div>

        <div className='flex justify-end mt-6'>
          <button
            type="submit"
            className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
          >
            Submit
          </button>
        </div>
      </aside>
    </section>
  );
}

export default Form;