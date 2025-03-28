import React from "react";
import Footer from "../components/Footer";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="bg-[#0B2432] min-h-screen flex items-center justify-center py-16 px-4 sm:px-8">
      <div className="max-w-3xl w-full bg-[#EFECE3] p-8 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 p-3 bg-white text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 p-3 bg-white text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full mt-1 p-3 bg-white text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Newsletter Opt-in */}
          <Switch.Group as="div" className="flex items-center space-x-3">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`${
                agreed ? "bg-yellow-500" : "bg-gray-400"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  agreed ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <Switch.Label className="text-gray-700 text-sm">
              Subscribe to my newsletter
            </Switch.Label>
          </Switch.Group>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
