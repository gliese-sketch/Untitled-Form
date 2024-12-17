import { useForm } from "react-hook-form";
import Intro from "@/components/Intro";
import { TbFlareFilled } from "react-icons/tb";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (value) => {
    console.log(errors);
    console.log(value);
  };

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* Inputs */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          {...register("fullname", {
            required: true,
            message: "Please provide full name",
          })}
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Your name"
        />
        {errors.fullname && <p>Please enter your full name</p>}

        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="your@company.com"
        />
        <input
          type="text"
          name="message"
          id="message"
          {...register("message")}
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Tell us a little about your project..."
        />

        <p className="my-6 text-gray-700">How can we help?</p>

        {/* Checbox */}
        <div className="mb-8 grid grid-cols-2 md:max-w-96">
          {services.map((service, index) => {
            return (
              <label
                key={service + index}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  {...register("service")}
                  className="size-5"
                />
                {service}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 p-1 text-white md:p-2"
          onMouseOver={() => console.log(errors.fullname)}
        >
          Let's get started <TbFlareFilled className="text-lime-400" />
        </button>
      </form>
    </>
  );
}

export default Form;
