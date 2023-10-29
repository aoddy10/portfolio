"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";


const resend = new Resend(process.env.RESEND_API_KEY);
const sendToEmail = process.env.RECEIVE_EMAIL;

export const sendEmail = async (formData: FormData) => {
  console.log(`Running on server`);

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

    let data;
  try {
    data = await resend.emails
      .send({
        from: "Portfolio - Contact Form <onboarding@resend.dev>",
        to: sendToEmail as string,
        subject: "Someone send you contact details on your PORTFOLIO",
        reply_to: senderEmail as string,
        // text: message as string
        react: React.createElement(ContactFormEmail,{
          message: message as string,
          senderEmail: senderEmail as string
        })
        
      });

  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {data};
};
