import Image from "next/image";
import Header from "../components/header"
import Bande from  "../components/bande"

export default function Home() {
  return (
    <>
      <Header/>
      <Bande/>
      <main className="container m-auto">
        <div className=" border-b">
          <h2 className="text-4xl my-6 mb-1">Title </h2>
          <p className="mb-2">Subtitle </p>
        </div>

      </main>
    </>
  );
}
