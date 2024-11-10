"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Ei from "./components/Ei";
import Jujutsu from "./components/Jujutsu";
import Frieren from "./components/Frieren";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Worktiktok from "./components/Worktiktok";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Header />
      <article id="ABOUT_US" className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <span className="rounded-md bg-red-600 px-2 py-1 text-xs uppercase text-white">important</span>
            <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl font-mono">About Us</p>
            <p className="mt-3 text-white font-mono">AnimeArc was created as a personal space for storing anime archives, both those I've watched and those I haven't. It also serves as a place to recommend anime to others who are looking for something new to watch and discover what they might like.</p>

            <button className="button mt-5" onClick={() => window.open("#", "_blank")}>
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

      {/* ------------------------------------------------------ */}
      <div className="h-full pt-4 pb-72 w-full">
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

      {/* -------------------------------------------------- */}
      <section id="Best" className="md:w-11/12 sm:w-full sm:px-2 py-8 px-8 mx-auto">
        <h1 className="mb-10 text-center font-mono text-5xl font-bold md:mt-6 md:text-4xl">Best Anime For Me</h1>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="/image/BestAnime/ei.png" alt="blog" width={5000} height={5000} />
            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Investigate</h2>
            <div className="py-1 px-6">
              <h1 className="title-font inline-block cursor-pointer text-lg capitali font-extrabold tracking-wide text-gray-800">Oshi no Ko</h1><br />
              <h1 className="title-font mb-3 inline-block cursor-pointer text-lg capitali font-extrabold tracking-wide text-gray-800">[推しの子]</h1>
              <p className="line-clamp-9 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Oshi no Ko takes you through a story full of drama, complexity, and painful truths. It might make you question your perception of real-life celebrities. and makes you follow the story deeply until the final episode.</p>
            </div>

            <div className="flex justify-center mb-2">
              <Ei className="text-center" />
            </div>
          </article>

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="/image/BestAnime/jujutsu.jpg" alt="blog" width={5000} height={5000} />
            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Action</h2>
            <div className="py-1 px-6">
              <h1 className="title-font inline-block cursor-pointer text-lg capitali font-extrabold tracking-wide text-gray-800">Jujutsu Kaisen</h1><br />
              <h1 className="title-font mb-3 inline-block cursor-pointer text-lg capitali font-extrabold tracking-wide text-gray-800">[呪術廻戦]</h1>
              <p className="line-clamp-9 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Jujutsu Kaisen is an exciting anime that combines fighting and curses. As Yuji Itodori, a boy who swallowed the “Sukuna finger,” becomes entangled in a world of demons and sorcerers to protect his friends and loved ones.</p>
            </div>

            <div className="flex justify-center mb-1">
              <Jujutsu className="text-center" />
            </div>
          </article>

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="/image/BestAnime/frieren.jpeg" alt="blog" width={5000} height={5000} />
            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Slice of Life</h2>
            <div className="py-1 px-6">
              <h1 className="title-font inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">sousou no frieren</h1>
              <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">[葬送のフリーレン]</h1>
              <p className="line-clamp-8 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Sousou no Frieren is the story of Frieren, an elf witch who, after a long journey with her brave companions, embarks on a new adventure to understand the meaning of time, the value of friendship, and the brevity of life.</p>
            </div>

            <div className="flex justify-center mb-1">
              <Frieren className="text-center" />
            </div>
          </article>

        </div>
      </section>

      {/* ------------------------------------------------------ */}

      <div id="BLOG" className="flex justify-center">
        <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg">
          <div className="flex flex-col overflow-hidden bg-black sm:flex-row md:h-80">
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="text-xl text-gray-800 font-black md:text-2xl lg:text-4xl font-mono">Anime Blog</h2>
              <p className="mt-2 text-lg font-mono text-gray-800">All Anime Blog</p>
              <p className="mt-4 mb-4 max-w-md text-gray-500">In this blog, I will take you all to explore anime from my library. Gathered from watching various genres, including action, drama, fantasy, and romance, whether you like adventures in different-dimensional worlds. or heart-warming stories I'm sure there's something exciting waiting for you!</p>
              <Link href="/Blog">
                <button className="button-genshin md:w-1/3">
                  <div className="circle-genshin"></div>
                  <span>View All</span>
                  <div className="light"></div>
                </button>
              </Link>
            </div>
            <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <Image className="h-full w-full object-cover" src="/image/marin.png" loading="lazy" alt="marin" width={5000} height={5000} />
            </div>
          </div>
        </div>
      </div>

      <div id="DID YOU KNOW" className="flex justify-center">
        <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg">
          <div className="flex flex-col overflow-hidden bg-black sm:flex-row md:h-80">
            <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <Image className="h-full w-full object-cover" src="/image/999.png" loading="lazy" alt="999" width={5000} height={5000} />
            </div>
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="text-xl text-gray-800 font-black md:text-2xl lg:text-4xl font-mono">Did You Know?</h2>
              <p className="mt-2 text-lg font-mono text-gray-800">Anime Did You Know?</p>
              <p className="mt-4 mb-4 max-w-md text-gray-500">Welcome to Anime Did You Know? Here you'll find fun facts about anime that might surprise you! This menu was created to share interesting information and secrets behind anime that you may not have known before.</p>
              <Link href="DYN">
                <button className="button-genshin md:w-1/3">
                  <div className="circle-genshin"></div>
                  <span>View All</span>
                  <div className="light"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- */}
      <AboutMe />
      <Work />
      <Worktiktok />
      <Contact />
      <Footer />
    </div>
  );
}
