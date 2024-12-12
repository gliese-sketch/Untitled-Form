import { useRef } from "react";

function Practice() {
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Will prevent refresh of page
    console.log(input.current.value);
  };

  return (
    <form
      className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-lime-100"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl">User typing: </h1>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name"
        className="rounded-lg border border-2 border-zinc-500 p-2"
        ref={input}
        onChange={(e) => console.log(e.target.value)}
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
