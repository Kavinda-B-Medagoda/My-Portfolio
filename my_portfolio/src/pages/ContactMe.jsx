import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ktvdtqr", "template_2qzpzam", form.current, {
        publicKey: "vh1o9uyqKHoO3dwWs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-[1920px] w-full mx-auto pb-10 h-screen bg-black text-white py-5 lg:pt-24 lg:px-[10%] flex justify-center items-center gap-5 flex-col px-10">
      <div
        data-aos="flip-left"
        style={{
          backgroundImage: "url('src/assets/contactme.jpg')",
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center lg:justify-start gap-5 lg:h-full w-full lg:w-10/12 mx-auto rounded-lg bg-[#1C1C1C] bg-opacity-50"
      >
        <div className=" w-full lg:w-2/5 rounded-lg px-5 flex flex-col justify-content-between items-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white opacity-80 text-center py-10 text-4xl"
          >
            Contact Me
          </h2>
          <div className="w-full px-10 opacity-80">
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-down"
              data-aos-delay="150"
              action="#"
              method="post"
              id="contactForm"
              className="w-full"
            >
              <div class="form-group py-5">
                <label for="name">Name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="bg-transparent outline-none border-b-2 w-full"
                  required
                />
              </div>

              <div class="form-group py-5">
                <label for="email">Email:</label>
                <br />
                <input
                  type="email"
                  className="bg-transparent outline-none border-b-2 w-full"
                  id="email"
                  name="user_email"
                  required
                />
              </div>

              <div class="form-group py-5">
                <label for="message">Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="bg-transparent outline-none border-b-2 w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-5 text-xl rounded-md py-2 mb-10 bg-[#8D7AFF] hover:bg-opacity-80 duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
