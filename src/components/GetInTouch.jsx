/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import SectionMotion from "../utils/SectionMotion";
import { styles } from "../utils/styles";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", name + " - Portfolio Contact");
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/myzkellg", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        alert("Error while sending email. Please try again later.");
        console.error("HTTP Error:", response.statusText);
        return;
      }

      const data = await response.json();

      if (data.error) {
        alert(`Server Error: ${data.error}`);
        return;
      }

      alert("Email sent successfully!");
      setMessage("");
    } catch (e) {
      alert("Success");
      setMessage("");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative text-lightText py-2 pt-20 min-h-screen w-full h-auto bg-darkBackground"
      >
        <h1 className="relative w-max ml-auto mr-auto cursor-text font-bold text-5xl text-lightText">
          Get In Touch.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 ml-auto mr-auto flex flex-col gap-10 w-max"
        >
          <div className="flex flex-col gap-1">
            <label>Your Name</label>
            <input
              type="name"
              className="outline-none p-1 text-lightText bg-[#161616] rounded-t-lg border-b-2 border-primary focus:border-primaryHover"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="outline-none p-1 text-lightText bg-[#161616] rounded-t-lg border-b-2 border-primary focus:border-primaryHover"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              className="outline-none p-1 text-lightText bg-[#161616] rounded-t-lg border-b-2 border-primary focus:border-primaryHover"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="ml-auto mr-auto flex flex-col items-center">
            <button
              type="submit"
              className={`${styles.normalTransition} text-lightText cursor-pointer rounded-2xl px-4 py-2 w-max h-max text-lg font-bold bg-primary hover:bg-primaryHover hover:shadow-black hover:shadow-[0px_5px_2px_0px]`}
            >
              Send email
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SectionMotion(GetInTouch, "contact");
