"use client";

import React, { useState } from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { motion } from "@/lib/motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

type contactFormType = {
  email: string;
  message: string;
};

function Contact() {
  const [data, setData] = useState<contactFormType>({
    email: "",
    message: "",
  });

  return (
    <motion.section
      id="contact"
      className="mb-28 px-2 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] flex flex-col items-center"
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

      <p className=" text-white font-thin -mt-6 dark:text-white/80">
        Please contact me at email:{" "}
        <a
          className="underline font-semibold ml-2"
          href="mailto:anirut.puangkingkaew@gmail.com"
          aria-label="Contact me by sending email"
        >
          anirut.puangkingkaew@gmail.com
        </a>
        {/* <br />
                or through the contact form below. */}
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");

          // reset form
          setData({ email: "", message: "" });
        }}
        className="mt-10 sm:items-start gap-y-2 dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 w-full rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 w-full my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          value={data.message}
          onChange={(e) => {
            setData({ ...data, message: e.target.value });
          }}
          required
          maxLength={500}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
