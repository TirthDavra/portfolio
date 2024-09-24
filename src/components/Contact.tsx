import Image from "next/image";
import React from "react";
import phone from "@/../public/assets/phone.png";
import mail from "@/../public/assets/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">+931 562 82 35</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">test34@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px] mx-auto">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let's Connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and I'll get back to you
        </p>
        <form
          action={"https://getform.io/f/bxojevkas"}
          method="POST"
          className="space-y-4"
        >
          <div className="grid md:gird-cols-2 gap-4">
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400"
              type="text"
              name="name"
              placeholder="First Name"
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400"
              type="text"
              name="name"
              placeholder="Last Name"
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400"
              type="phone"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <textarea
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400"
            placeholder="Your Message"
          />
          <button className="bg-orange-700 hover:bg-orange-500 text-white font-semibold w-full text-xl py-2 px-6 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
