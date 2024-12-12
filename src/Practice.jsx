import { useState } from "react";

function Practice() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-lime-100"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submit!");
        console.log(fullname, email, message);
      }}
    >
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name"
        className="rounded-lg border border-2 border-zinc-500 p-2"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your real email ID please!"
        className="rounded-lg border border-2 border-zinc-500 p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Enter your message"
        className="h-24 rounded-lg border border-2 border-zinc-500 p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
