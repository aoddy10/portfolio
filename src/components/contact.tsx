"use client";

import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact</SectionHeader>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me at email:{" "}
        <a
          className="underline font-semibold"
          href="mailto:anirut.puangkingkaew@gmail.com"
        >
          anirut.puangkingkaew@gmail.com
        </a>
        <br />
        or through the contact form below.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col gap-y-2 dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={500}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
