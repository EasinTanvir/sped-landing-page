"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "@/index";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("contactUs");
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
        <h1 className="text-4xl sm:text-5xl font-bold italic">
          {t("heading")}
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <FaPhoneAlt className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">{t("phoneLabel")}</h3>
          <p className="text-gray-600 text-sm">+358 12 345 6789</p>
        </div>
        <div className="space-y-2">
          <FaEnvelope className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">{t("emailLabel")}</h3>
          <p className="text-gray-600 text-sm">info@ravintolasinet.fi</p>
        </div>
        <div className="space-y-2">
          <FaMapMarkerAlt className="text-3xl text-colors-button mx-auto" />
          <h3 className="text-lg font-semibold">{t("locationLabel")}</h3>
          <p className="text-gray-600 text-sm">Helsinki, Finland</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder={t("form.name")}
              {...register("name", { required: t("formErrors.name") })}
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
              placeholder={t("form.email")}
              {...register("email", {
                required: t("formErrors.emailRequired"),
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: t("formErrors.emailInvalid"),
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
            placeholder={t("form.message")}
            {...register("message", { required: t("formErrors.message") })}
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
          {t("form.submit")}
        </button>
      </form>
    </Container>
  );
};

export default ContactUs;
