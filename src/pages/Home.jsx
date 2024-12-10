import Header from "@/components/Header";
import Form from "@/components/Form";
import Aside from "@/components/Aside";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
      <Header />

      <div className="grid grid-cols-8">
        <div className="col-span-2 hidden bg-green-100 md:block">
          <Aside />
        </div>
        <div className="col-span-full bg-blue-100 md:col-span-6">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
