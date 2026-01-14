import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ContactFormData, ContactSchema } from "../validation/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const url = import.meta.env.VITE_PORTFOLIO_URL;
    if (!url) {
      toast.error("VITE_PORTFOLIO_URL not provided", { duration: 3000 });
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(`${url}/api/v1/contact`, data, config);
      console.log("data:", response);

      if (response.status === 200) {
        toast.success("Message sent successfully!", { duration: 10000 });
        reset();
      }
    } catch (error: any) {
      let errorMessage: string;
      console.error("Error sending message", error);
      if (error.code === "ERR_INTERNET_DISCONNECTED") {
        errorMessage = "Failed to send message, check internet connectivity";
      } else if (error.response && error.response.status === 400) {
        errorMessage = "provide all details";
        toast.error("provide all necessary details", { duration: 3000 });
      } else {
        errorMessage = "Failed to send message";
      }
      setError(errorMessage);
      toast.error("error sending message", { duration: 5000 });
    }
  };
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#cccdde",
            border: "1px solid #686868",
          },
        }}
      />
      <div className="mt-10 flex flex-col sm:flex-row justify-between sm:mx-10 animate-fade-in mb-5">
        {/* left */}
        <div className="borde m-5 sm:w-[50%] space-y-5">
          <p className="uppercase text-[15px]  pl-2 py-2 sm:w-[70%] border-gradient">
            let's get your project done
          </p>
          <h1 className="text-[30px] tracking-normal font-mono">
            Let's create amazing stuff together!
          </h1>
          <p className="font-sans text-green-400 text-[14px]">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className="mt-8 sm:ml-">
            <h2 className="font-spaceGrotesk font-bold text-[14px] uppercase tracking-widest text-white/40 mb-4">
              _want to reach me ?
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {/* Email Card */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=olawunioladeji06@gmail.com"
                className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.07] hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MdEmail className="text-[#737373] group-hover:text-white" />
                  <span className="text-[13px] font-mono text-[#a1a1a1] group-hover:text-white">
                    Email
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#444] group-hover:text-[#737373]">
                  olawunioladeji06@gmail.com
                </span>
              </a>

              {/* Phone Card */}
              <div className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <MdOutlineLocalPhone className="text-[#737373]" />
                  <span className="text-[13px] font-mono text-[#a1a1a1]">
                    Phone
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#737373]">
                  +234 9060839818
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:w-[60%] space-y-5 sm:px-10 m-5 animate-slide-in"
          style={{ animationDelay: "1s" }}
        >
          {/* <p className="text-[25px] font-mono">send a message</p> */}
          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="name" className="capitalize text-white/40 ">
              name
            </label>
            <input
              {...register("name")}
              placeholder="john doe"
              className="bg-white/[0.03] border border-white/5 rounded outline-none p-1 placeholder:text-[#686868] font-spaceGrotesk"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="" className="capitalize  text-white/40">
              email
            </label>
            <input
              {...register("email")}
              placeholder="johndoe@gmail.com"
              className=" outline-none rounded  p-1 bg-white/[0.03] border border-white/5 placeholder:text-[#686868]"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="" className="capitalize  text-white/40">
              phone
            </label>
            <input
              {...register("phone")}
              placeholder="+234 1234567890"
              className="bg-white/[0.03] border border-white/5 outline-none rounded p-1 placeholder:text-[#686868]"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <textarea
            {...register("message")}
            className="h-[100px] p-3 w-full outline-none bg-white/[0.03] border border-white/5  placeholder:text-[#686868]"
            placeholder="message"
          >
            {/* <label htmlFor="">message</label> */}
          </textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="border sm:w-[60%] w-[100%] m-auto rounded py-2 border-gradient"
          >
            {isSubmitting ? "sending...." : "send message"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
