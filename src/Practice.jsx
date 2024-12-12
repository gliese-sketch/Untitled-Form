function Practice() {
  return (
    <form className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-lime-100">
      <h1 className="text-2xl">User typing: </h1>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Enter your name"
        className="rounded-lg border border-2 border-zinc-500 p-2"
      />
    </form>
  );
}

export default Practice;
