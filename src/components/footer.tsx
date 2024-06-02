import React from "react";

function Footer() {
  return (
    <footer className="text-center text-gray-500 w-full pb-2">
      <div className=" text-xs flex flex-col">
        <p className="mb-2">&copy; 2023 Anirut P. All rights reserved.</p>
        <p>
          <span>About this website:</span> built with React & Next.js (App
          Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
          React Email, Resend and React hot toast.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
