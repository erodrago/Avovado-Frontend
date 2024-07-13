"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export const AnimatedCard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-500 rounded-3xl p-8 shadow-lg max-w-2xl w-full mb-6 mt-10"
    >
      <h2 className="text-white text-4xl font-semibold text-center">
        Join Our Waitlist
      </h2>
      <p className="text-white mt-4 text-center sm:px-16 text-gray-300">
        Sign up to be the first to know when we launch. We will let you know
        once we go live.
      </p>
      <div className="max-w-sm mx-auto">
        <WaitlistForm />
      </div>
    </motion.div>
  );
};

const WaitlistForm = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz9Esx4bKRz6HvrlxGjEwdTKf8yAPQfi9-5DQjRCZ-0bfnulTCyA6gzizIn8SSyxJO2/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
        }),
      }
    );

    const result = await response.json();

    if (result.result === "success") {
      setMessage("Successfully added to the waitlist!");
      setEmail("");
    } else {
      setMessage("Error adding to the waitlist. Please try again.");
    }
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={() => {
        inputRef.current.focus();
      }}
      className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-black py-1.5 pl-6 pr-1.5 mt-6 shadow-2xl shadow-white"
    >
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
      />
      <button
        onClick={(e) => e.stopPropagation()}
        type="submit"
        className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gray-200 px-4 py-3 text-sm font-medium text-black transition-transform active:scale-[0.985]"
      >
        <span>Join Waitlist</span>
        <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
      </button>
    </form>
  );
};
