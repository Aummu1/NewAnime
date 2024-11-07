import Image from "next/image";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <article className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <span className="rounded-md bg-red-600 px-2 py-1 text-xs uppercase text-white">important</span>
            <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl font-mono">About Us</p>
            <p className="mt-3 text-white font-mono">AnimeArc was created as a personal space for storing anime archives, both those I've watched and those I haven't. It also serves as a place to recommend anime to others who are looking for something new to watch and discover what they might like.</p>

            <button className="button mt-5">
              <span className="text">Click Me</span>
              <div className="liquid">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
              </div>
            </button>

          </div>
          <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
            <Image className="rounded-xl shadow-lg" src="/image/aboutus/dan.jpeg" alt="Shop image" width={300} height={200} />
          </div>
        </div>
      </article>
      {/* -------------------------------------------------- */}
      <div id="BEST" className="flex justify-center">
        <Image className="" src="/image/ei.png" alt="Logo" width={2000} height={2000} />
      </div>
      {/* ------------------------------------------------------ */}

      <div className="wrapper">
        <div className="inner" style={{ "--quantity": 10 }}>
          <div className="card-1" style={{ "--index": 0, "--color-card": "142, 249, 252" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/peirro.png" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 1, "--color-card": "142, 252, 204" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/cap.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 2, "--color-card": "142, 252, 157" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/doc.jpg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 3, "--color-card": "215, 252, 142" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Damselette.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 4, "--color-card": "252, 252, 142" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Arlecchino.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 5, "--color-card": "252, 208, 142" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/TheRooste.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 6, "--color-card": "252, 142, 142" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Childe.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 7, "--color-card": "252, 142, 239" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Marionette.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 8, "--color-card": "204, 142, 252" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Signora.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
          <div className="card-1" style={{ "--index": 9, "--color-card": "142, 202, 252" }}>
            <div className="img">
              <Image className="img" src="/image/fatui/Regrator.jpeg" alt="Logo" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
