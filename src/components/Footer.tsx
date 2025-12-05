

export default function Footer() {

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
            RepoPaglu
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
            Generate tests, README, and API docs from any GitHub repository in seconds —
            powered by intelligent automation and clean dev tooling.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-2 md:text-right">
          <h3 className="font-medium text-black dark:text-white">Connect</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                href="https://github.com/Rohan-2601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rohan-raj-5b5198294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/RohanRaj1271853?t=7UFJA4ISCo7zJjW2RKQO7w&s=09"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                Twitter(X)
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        Built with ❤️ by Rohan
      </div>
    </footer>
  );
}


