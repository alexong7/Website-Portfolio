import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:alexong70@gmail.com?subject=${formData.subject}&body=${formData.message} `;
  };

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" space-y-3 flex flex-col">
        <h4 className="text-sm:text-2xl xl:text-4xl font-semibold text-center">
          Want to learn more about me?{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s Chat!
          </span>
        </h4>

        {/* Hero Icons  */}
        <div className=" space-y-2 sm:space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-sm sm:text-md">563-508-4709</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-sm sm:text-md">alexong70@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-sm sm:text-md">Ames, IA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  sm:top-0 space-y-2   mx-auto  "
        >
          <div className=" space-y-3 sm-space-y-0 flex-col flex sm:flex-row sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-lg text-black font-bold text-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
