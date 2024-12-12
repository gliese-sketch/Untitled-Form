import { useState } from "react";

function Practice() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form
      className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-lime-100"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submit!");
        console.log(formData);
      }}
    >
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name"
        className="rounded-lg border border-2 border-zinc-500 p-2"
        value={formData.fullname}
        onChange={(e) => handleChange(e.target.value, "fullname")}
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your real email ID please!"
        className="rounded-lg border border-2 border-zinc-500 p-2"
        value={formData.email}
        onChange={(e) => handleChange(e.target.value, "email")}
      />
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Enter your message"
        className="h-24 rounded-lg border border-2 border-zinc-500 p-2"
        value={formData.message}
        onChange={(e) => handleChange(e.target.value, "message")}
      />

      <button
        type="submit"
        className="rounded bg-blue-400 px-2 py-1 text-white"
      >
        Submit form
      </button>
    </form>
  );
}

export default Practice;
