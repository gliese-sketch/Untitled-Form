import Header from "@/components/Header";
import Form from "@/components/Form";
import Aside from "@/components/Aside";

function Home() {
  return (
    <div className="min-h-screen bg-red-100 px-4 py-3 md:px-8">
      <Header />

      <div className="grid grid-cols-8">
        <div className="col-span-2 hidden bg-green-100 md:block">
          <Form />
        </div>
        <div className="col-span-full bg-blue-100 md:col-span-6">
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default Home;
