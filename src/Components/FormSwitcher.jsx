import React, { useState } from "react";

const FormSwitcher = ({ closeForm }) => {
  const [isRecruiter, setIsRecruiter] = useState(false);

  const handleToggle = () => {
    setIsRecruiter((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#111] text-white p-6 rounded-lg shadow-transparent max-w-md w-full">
        <button onClick={closeForm} className="w-full flex justify-end">
          <i className="ri-close-large-line"></i>
        </button>
        <h2 className="text-2xl font-semibold mb-4">
          {isRecruiter ? "Join as Recruiter" : "Join as Intern/Freelancer"}
        </h2>
        <p className="text-sm text-gray-400">
          {isRecruiter ? (
            <button onClick={handleToggle} className="text-blue-400 underline">
              I AM SEEKING INTERNSHIPS/FREELANCING - Waitlist here
            </button>
          ) : (
            <button onClick={handleToggle} className="text-blue-400 underline">
              I AM A RECRUITER - Join here
            </button>
          )}
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Your phone number"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {isRecruiter ? (
            <>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="hiringFor"
                >
                  You Will Be Hiring For
                </label>
                <input
                  type="text"
                  id="hiringFor"
                  placeholder="Intern"
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Will You Be Willing To Pay For Our Service?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payForService"
                      value="yes"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payForService"
                      value="no"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="featureRequest"
                >
                  What One Feature We Can Build That Can Help You
                </label>
                <textarea
                  id="featureRequest"
                  rows={1}
                  placeholder="Feature request"
                  className="resize-none w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
            </>
          ) : (
            <>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="college"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  placeholder="Your college name"
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  You're Interested In
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="interestedIn"
                      value="internships"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Internships</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="interestedIn"
                      value="freelancing"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Freelancing</span>
                  </label>
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
          >
            {isRecruiter
              ? "Join Waitlist as Recruiter"
              : "Join Waitlist as Intern/Freelancer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSwitcher;
