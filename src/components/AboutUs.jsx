import React from "react";
import { FaUtensils, FaLeaf, FaHeart, FaPeopleCarry } from "react-icons/fa";
import { Container } from "@/index"; // Assuming you have a Container component

const AboutUs = () => {
  return (
    <Container className="md:py-40 py-12 space-y-12 ">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold italic">
          About Ravintola Sinet
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Ravintola Sinet</span>,
          where flavor meets tradition. Located in the heart of our community,
          we offer a carefully crafted selection of dishes made with fresh,
          locally sourced ingredients.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center space-y-3">
          <FaUtensils className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">Authentic Cuisine</h3>
          <p className="text-gray-600 text-sm">
            Our menu is inspired by traditional and modern flavors, designed to
            satisfy every palate.
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaLeaf className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
          <p className="text-gray-600 text-sm">
            We believe in fresh, organic, and locally sourced produce to serve
            the best on your plate.
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaHeart className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">Made with Love</h3>
          <p className="text-gray-600 text-sm">
            Every dish we serve is prepared with care and passion by our
            dedicated chefs.
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaPeopleCarry className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">Warm Hospitality</h3>
          <p className="text-gray-600 text-sm">
            Experience a welcoming atmosphere where every guest is treated like
            family.
          </p>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-gray-200">
        <p className="text-gray-700 italic">
          Join us at <span className="font-semibold">Ravintola Sinet</span> —
          where every meal is a story, and every guest is family.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
