import React from "react";

import {
  FaUser,
  FaUsers,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "@/utils/icons";
import { H3, Icon, Text } from "@/index";

const BookTableForm = () => {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-16  text-white">
        <H3 className="text-2xl md:text-3xl font-bold mb-3">Book a Table</H3>
        <Text className="text-gray-300 mb-6 !text-sm">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, making it look like readable English.
        </Text>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={20} icon={FaUser} className="text-white" />

            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={20} icon={FaPhone} className="text-white" />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={25} icon={FaUsers} className="text-white" />
            <input
              type="number"
              placeholder="Number of People"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={20} icon={FaEnvelope} className="text-white" />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={20} icon={FaClock} className="text-white" />
            <input
              type="time"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Icon size={20} icon={FaCalendarAlt} className="text-white" />
            <input
              type="date"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>
        </form>

        <div className="mt-10">
          <button className="bg-colors-button text-white font-bold py-2.5 px-6 rounded-md ">
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookTableForm;
