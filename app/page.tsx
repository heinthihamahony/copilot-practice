import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-[#03022f] px-5 text-white">
        <div className="flex items-center py-5 gap-5 justify-between ">
          <div className="flex gap-5 text-white font-light">
            <svg
              fill="rgba(255,255,255,1)"
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github text-white"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <a className="flex items-center" href="#">
              Product{" "}
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(126,126,126,1)"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </a>
            <a className="flex items-center" href="#">
              Solutions{" "}
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(126,126,126,1)"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </a>
            <a className="flex items-center" href="#">
              Open Source{" "}
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(126,126,126,1)"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </a>
            <a className="flex items-center" href="#">
              Pricing{" "}
            </a>
          </div>
          <div className="flex gap-6">
            <form action="" className=" flex items-center">
              <div className="">
                <input
                  type="search"
                  placeholder="Search or jump to..."
                  className="w-full p-2 rounded-l-lg bg-slate-800 text-white"
                />
              </div>
              <button className="">
                <svg
                  className="w-10 py-2 px-2 rounded-r-lg bg-slate-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
              </button>
            </form>
            <div className=" text-white flex gap-4">
              <button>Sign in</button>
              <button className="bg-black border border-white px-2 py-1 rounded-lg">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="text-white flex gap-8 items-end mt-2">
          <a className="font-bold text-xl" href="#">
            Features
          </a>
          <a className="font-light" href="#">
            Actions
          </a>
          <a className="font-light" href="#">
            Packages
          </a>
          <a className="font-light" href="#">
            Security
          </a>
          <a className="font-light" href="#">
            Codespaces
          </a>
          <a className="font-light" href="#">
            Copilot
          </a>
          <a className="font-light" href="#">
            Code review
          </a>
          <a className="font-light" href="#">
            Search
          </a>
          <a className="font-light" href="#">
            Issues
          </a>
          <a className="font-light" href="#">
            Discussions
          </a>
        </div>
        <div className="">
          <div className="">
            <span className="flex items-center gap-2 text-lg border w-44 justify-center rounded-full mx-auto mt-24">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                className="Primer_Brand__Label-module__Label__icon-visual___lD1Qa w-5"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="rgba(255,255,255,1)"
              >
                <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path>
                <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
              </svg>
              <p>Github Copilot</p>
            </span>
            <p className=" text-center font-semibold text-7xl mt-6 mb-10">
              The world’s most widely <br /> adopted AI developer tool.
            </p>
            <button className=" bg-white text-black flex items-center py-3 px-5 rounded-lg mx-auto">
              Get started with Copilot{" "}
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(0,0,0,1)"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </button>
          </div>
          <div className=" mt-28 pb-20">
            <video
              className=" px-20 rounded-xl"
              src="https://github.githubassets.com/assets/hero-lg-6a98e47708e8.mp4"
            ></video>
          </div>
        </div>
      </div>
      <div className=" bg-[#161b22] px-24 text-white pb-20">
        <div className="pt-36">
          <span className="flex items-center gap-2 border w-40 justify-center rounded-full text-white">
            <p className=" py-1">Enterprise-ready</p>
          </span>
          <p className=" text-6xl font-semibold mt-4 pb-20">
            The competitive advantage <br /> developers ask for by name.
          </p>
        </div>
        <div className="">
          <div className="bg-blue-2 rounded-xl p-14">
            <p className="text-5xl font-semibold">
              Proven to increase <br /> developer productivity and <br />{" "}
              accelerate the pace of <br /> software development.
            </p>
            <a className="flex items-center mt-32" href="#">
              Read the research
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </a>
          </div>
          <div className="bg-blue-2 rounded-xl p-14 mt-6">
            <p className="text-5xl font-semibold">
              Committed to your privacy, <br /> security, and trust.
            </p>
            <a className="flex items-center mt-56" href="#">
              Visit the Copilot Trust Center
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </a>
          </div>
          <div className="bg-black rounded-xl mt-6  grid grid-cols-2 gap-2">
            <div className="p-14 ">
              <p className="text-5xl  font-semibold">
                Duolingo empowers its <br /> engineers to be force <br />{" "}
                multipliers for expertise <br /> with GitHub Copilot, <br />{" "}
                Codespaces.
              </p>
              <a className="flex items-center mt-24 gap-2" href="#">
                Read customer story
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
            <div className="m-6">
              <img
                className=" rounded-lg"
                src="https://github.com/images/modules/site/copilot/enterprise-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0e1319] px-24 text-white">
        <div className="text-5xl font-semibold py-24">
          <p className=" pt-8 mb-8 ">The industry standard.</p>
          <div className=" grid grid-cols-3 gap-8 pt-6">
            <div className=" bg-black p-10 rounded-3xl">
              <p className=" font-medium">37,000+</p>
              <p className=" pt-6 text-2xl font-normal text-gray-500">
                Businesses have <br /> adopted GitHub Copilot
              </p>
            </div>
            <div className=" bg-black p-10 rounded-3xl">
              <p className=" font-medium">1 in 3</p>
              <p className=" py-6 text-2xl font-normal text-gray-500">
                Fortune 500 companies <br /> use GitHub Copilot
              </p>
              <p className=" text-base font-normal text-gray-500">
                Available for business since Dec 2022
              </p>
            </div>
            <div className=" bg-black p-10 rounded-3xl">
              <p className=" font-medium">55%</p>
              <p className=" py-6 text-2xl font-normal text-gray-500">
                Developer preference <br /> for GitHub Copilot
              </p>
              <p className=" text-base font-normal text-gray-500">
                Stack Overflow 2023 Survey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0d1116] px-24 text-white pb-20">
        <div className="pt-36">
          <span className="flex items-center gap-2 border w-40 justify-center rounded-full text-white">
            <p className=" py-1">Features</p>
          </span>
          <p className=" text-7xl font-semibold mt-4 pb-20">
            The AI coding assistant <br /> elevating developer workflows.
          </p>
        </div>
        <div className=" rounded-xl overflow-hidden">
          <video src="https://github.com/images/modules/site/copilot/features-breakout.mp4"></video>
        </div>
        <div className=" mt-24">
          <div className=" grid grid-cols-2">
            <div className=" my-auto">
              <p className=" text-4xl font-semibold">
                Get AI-based <br /> suggestions in real time.
              </p>
              <p className=" text-gray-500 mt-6">
                GitHub Copilot suggests code completions as <br /> developers
                type and turns natural language prompts <br /> into coding
                suggestions based on the project's context <br /> and style
                conventions.
              </p>
            </div>
            <div className=" rounded-2xl overflow-hidden">
              <video src="https://github.com/images/modules/site/copilot/features-river-1.mp4"></video>
            </div>
          </div>
          <div className=" grid grid-cols-2 my-20">
            <div className=" my-auto">
              <span className="flex items-center gap-2 border w-40 justify-center rounded-full text-white mb-3">
                <p className=" py-1">Copilot Enterprise</p>
              </span>
              <p className=" text-4xl font-semibold">
                Docs that feel tailored for <br /> you.
              </p>
              <p className=" text-gray-500 mt-6">
                Spend less time searching and more time learning, by getting
                personalized answers that are grounded in your organization’s
                documentation, with inline citations. Load content → Ask
                question → Profit.
              </p>
            </div>
            <div className=" rounded-xl overflow-hidden">
              <video src="https://github.com/images/modules/site/copilot/features-river-2.mp4"></video>
            </div>
          </div>
          <div className=" grid grid-cols-2">
            <div className=" my-auto">
              <span className="flex items-center gap-2 border w-40 justify-center rounded-full text-white mb-3">
                <p className=" py-1">Copilot Enterprise</p>
              </span>
              <p className=" text-4xl font-semibold">
                Pull requests that tell a <br /> story.
              </p>
              <p className=" text-gray-500 mt-6">
                GitHub Copilot keeps track of your work, suggests descriptions,
                and helps reviewers reason about your changes.
              </p>
            </div>
            <div className=" rounded-xl overflow-hidden">
              <video src="https://github.com/images/modules/site/copilot/features-river-3.mp4"></video>
            </div>
          </div>
        </div>
        <footer className=" mt-20 border-t border-t-gray-500">
          <div className="grid grid-cols-5 pt-20">
            <div className="">
              <p className=" text-3xl font-semibold">GitHub</p>
              <p className=" text-sm font-bold mt-5">
                Subscribe to our developer newsletter
              </p>
              <p className=" text-sm text-gray-500">
                Get tips, technical guides, and best practices. Twice a month.
                Right in your inbox.
              </p>
              <button className=" border border-gray-500 px-4 py-3 rounded-lg mt-6 font-semibold">
                Subscribe
              </button>
            </div>
            <div className=" text-sm text-gray-500">
              <p>Product</p> <br />
              <a href="#">Features</a> <br /> <br />
              <a href="#">Enterprise</a> <br /> <br />
              <a href="#">Copilot</a> <br /> <br />
              <a href="#">Security</a> <br /> <br />
              <a href="#">Pricing</a> <br /> <br />
              <a href="#">Team</a> <br /> <br />
              <a href="#">Resources</a> <br /> <br />
              <a href="#">Roadmap</a> <br /> <br />
              <a href="#">Compare GitHub</a>
            </div>
            <div className=" text-sm text-gray-500">
              <p>Platform</p> <br />
              <a href="#">Developer API</a> <br /> <br />
              <a href="#">Partners</a> <br /> <br />
              <a href="#">Electron</a> <br /> <br />
              <a href="#">GitHub Desktop</a>
            </div>
            <div className=" text-sm text-gray-500">
              <p>Support</p> <br />
              <a href="#">Docs</a> <br /> <br />
              <a href="#">Community Forum</a> <br /> <br />
              <a href="#">Professional Services</a> <br /> <br />
              <a href="#">Premium Support</a> <br /> <br />
              <a href="#">Skills</a> <br /> <br />
              <a href="#">Status</a> <br /> <br />
              <a href="#">Contact GitHub</a> <br /> <br />
            </div>
            <div className=" text-sm text-gray-500">
              <p>Company</p> <br />
              <a href="#">About</a> <br /> <br />
              <a href="#">Customer stories</a> <br /> <br />
              <a href="#">Blog</a> <br /> <br />
              <a href="#">The ReadME Project</a> <br /> <br />
              <a href="#">Careers</a> <br /> <br />
              <a href="#">Press</a> <br /> <br />
              <a href="#">Inclusion</a> <br /> <br />
              <a href="#">Social Impact</a> <br /> <br />
              <a href="#">Shop</a>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#161b22] px-24 text-white flex items-center justify-between py-4">
        <div className=" text-xs flex gap-5">
          <p>© 2024 GitHub, Inc.</p>
          <a href="#">Terms</a>
          <a href="#">Privacy (Updated 08/2022)</a>
          <a href="#">Sitemap</a>
          <a href="#">What is Git?</a>
          <a href="#">Manage cookies</a>
          <a href="#">Do not share my personal information</a>
        </div>
        <div className=" flex items-center gap-3">
          <a href="#">
            <svg
              className=" w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className=" w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M21.001 3V14.7391L16.3053 19.4348H12.3923L9.95523 21.7826H6.91402V19.4348H3.00098V6.13043L4.2281 3H21.001ZM19.4358 4.56522H6.13141V16.3043H9.26185V18.6522L11.6097 16.3043H16.3053L19.4358 13.1739V4.56522ZM16.3053 7.69565V12.3913H14.7401V7.69565H16.3053ZM12.3923 7.69565V12.3913H10.8271V7.69565H12.3923Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
