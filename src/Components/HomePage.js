import Navbar from "./Navbar.js";
import MDBanner from "../assets/md.png";
import MDCard from "../assets/mdcard.png";
import History from "../assets/history.png";
import ReadyImg from "../assets/readysignal.png";

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <main className="mx-10 md:mx-28">
                {/* <div className="sm:text-center lg:text-left"> */}
                <h1 className="pt-16 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to the</span>
                  <span className="block text-indigo-600 xl:inline">
                    &nbsp; Markdown Editor
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Create The Best Blogs and README Files For Your Favourite
                  Projects.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-5 sm:mt-8 justify-center lg:justify-start">
                  <div className=" rounded-md shadow-md">
                    <a
                      href="/mdeditor"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full z-0"
              src={MDBanner}
              alt="banner"
            />
          </div>
          <hr />
        </div>
        <div className="m-auto mt-3  h-px w-3/4 bg-black md:w-1/2" />
        <p className="mx-7 flex justify-center p-4 text-3xl font-bold">
          Markdown Importance
        </p>
        <div className="m-auto mb-3  h-px w-3/4 bg-black md:w-1/2" />

        <div className="m-5 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-lg md:max-w-4xl 2xl:max-w-6xl">
          <div className="md:grid md:grid-cols-4">
            <img
              className="w-50 lg:h-50 lg:w-55 mx-auto h-40 object-contain md:col-span-1 md:w-48"
              src={MDCard}
              alt="card"
            />
            <div className="p-8 hover:bg-gray-200 md:col-span-3">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 md:text-left">
                What is Markdown
              </h5>
              <p className="mt-2 text-center text-slate-500 md:text-left">
                Markdown can be defined as a plain text formatting syntax used
                to write content on the web. It’s commonly used by writers and
                programmers to write quickly without having to take time using
                the formatting toolbar of text editors.
              </p>
            </div>
          </div>
        </div>

        <div className="m-5 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-lg md:max-w-4xl 2xl:max-w-6xl">
          <div className="md:grid md:grid-cols-4">
            <img
              className="w-50 lg:h-50 lg:w-55 mx-auto h-40 object-contain md:col-span-1 md:w-48"
              src={History}
              alt="history"
            />
            <div className="p-8 hover:bg-gray-200 md:col-span-3">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 md:text-left">
                History of Markdown
              </h5>
              <p className="mt-2 text-center text-slate-500 md:text-left">
                Markdown was created back in 2004 by John Gruber (of Daring
                Fireball) as an easy way for non-coders to write in a format
                that could be easily converted into HTML. John Gruber defines
                Markdown as, “A text-to-HTML conversion tool for web writers.
                Markdown allows you to write using an easy-to-read,
                easy-to-write plain text format, then convert it to structurally
                valid XHTML (or HTML)“.
              </p>
            </div>
          </div>
        </div>

        <div className="m-5 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-lg md:max-w-4xl 2xl:max-w-6xl">
          <div className="md:grid md:grid-cols-4">
            <img
              className="w-50 lg:h-50 lg:w-55 mx-auto h-40 object-contain md:col-span-1 md:w-48"
              src={ReadyImg}
              alt="ready"
            />
            <div className="p-8 hover:bg-gray-200 md:col-span-3">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 md:text-left">
                Ready To Learn and Create?
              </h5>
              <div className="grid grid-cols-2 gap-2 mt-5 sm:mt-8 justify-center lg:justify-start">
                  <div className=" rounded-md shadow-md">
                    <a
                      href="/mdeditor"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Go To Editor
                    </a>
                  </div>
                  <div className=" rounded-md shadow-md">
                    <a
                      href="https://www.markdownguide.org/cheat-sheet/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn Markdown
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
