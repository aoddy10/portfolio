import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Perform form submission logic here
    // ...
    setIsSubmitting(false);
  };

  return (
    <button
      id="submitButton"
      type="submit"
      className="group flex justify-center items-center gap-x-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1
          "
          />
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
