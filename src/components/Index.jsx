import React from "react";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="grid gap-12 lg:gap-24">
        <div className="flex flex-col items-center space-y-4 lg:space-y-6">
          <div className="space-y-4 lg:space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Elevate your space with smart lighting
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
              Transform your home with our smart light. Experience customizable
              colors, convenient dimming, and seamless voice control.
            </p>
          </div>
          <div className="w-full max-w-3xl grid items-center gap-4 lg:gap-8">
            <img
              alt="Smart light in a room"
              className="rounded-xl object-cover"
              height="450"
              src="/src/assets/sl1.jpg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </div>
        <div className="grid items-center gap-4 lg:gap-8">
          <div className="space-y-4 lg:space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Customizable. Convenient. Connected.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our smart light offers a seamless way to personalize your space.
              Whether you want to set the perfect mood with custom colors or
              adjust the brightness with a simple voice command, our light has
              you covered.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-dashed dark:border-gray-800">
                <CloudLightningIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-bold">Customizable Colors</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Personalize your space with millions of color options.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-dashed dark:border-gray-800">
                <MoonStarIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-bold">Dimming Options</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Adjust the brightness to create the perfect ambiance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-dashed dark:border-gray-800">
                <SpeakerIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-bold">Voice Control</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use your favorite voice assistant to manage your light.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid items-center gap-4 lg:gap-8">
          <div className="space-y-4 lg:space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              See what our customers are saying
            </h2>
          </div> */}
        {/* <div className="max-w-sm mx-auto grid gap-2">
            <div className="flex items-center space-x-4">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img
                  alt="Customer profile picture"
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "The smart light has completely changed the atmosphere in my
                home. I love being able to adjust the color of the light based
                on my mood."
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img
                  alt="Customer profile picture"
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "The installation was a breeze, and I was impressed by the build
                quality of the light. It feels like a premium product."
              </p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <footer className="bg-[#333333] text-white width-full mt-10">
        <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-start mb-8 md:mb-0">
            <span className="font-bold text-3xl">ILLUMINATE</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="mx-12 mb-8 md:mb-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-base text-gray-300 hover:text-white"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-300 hover:text-white"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-300 hover:text-white"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-300 hover:text-white"
                    href="#"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-300 hover:text-white"
                    href="#"
                  >
                    My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                PicoStone Technologies
              </h3>
              <p className="mt-4 text-base text-gray-300">
                63, BMC Industrial Estate,
                <br />
                Gandhi Nagar, Worli,
                <br />
                Mumbai – 400018
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function MoonStarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

function SpeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  );
}
