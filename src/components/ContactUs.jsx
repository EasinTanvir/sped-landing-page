"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "@/index";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Coming Soon...");
    reset();
  };

  return (
    <Container className="py-16 space-y-14">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold italic">Contact Us</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have questions, feedback, or
          want to make a reservation — reach out to us!
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <FaPhoneAlt className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600 text-sm">+358 12 345 6789</p>
        </div>
        <div className="space-y-2">
          <FaEnvelope className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600 text-sm">info@ravintolasinet.fi</p>
        </div>
        <div className="space-y-2">
          <FaMapMarkerAlt className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-600 text-sm">Helsinki, Finland</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-colors-button"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-colors-button"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-colors-button"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-colors-button text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default ContactUs;
