import React from 'react';

function App(): React.JSX.Element {
  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">


        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
            Hello, I'm Adnan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Developer | React Enthusiast | Open Source Lover
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* GitHub Button */}
            <a
              href="https://github.com/adnanhjoy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105 shadow-lg"
            >
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/adnanhjoy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105 shadow-lg"
            >
              LinkedIn
            </a>

            {/* Portfolio Button*/}
            <a
              href="https://adnanhjoy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105 shadow-lg"
            >
              Portfolio
            </a>
          </div>

          <p className="mt-16 text-gray-400 text-sm">
            Built with Electron + Vite + TypeScript + Tailwind CSS ❤️
          </p>
        </div>
      </div>
    </>
  );
}

export default App;