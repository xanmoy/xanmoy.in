import React from "react";
import './footer.css';
import { FaTwitter, FaGithub, FaGitlab, FaHashnode } from "react-icons/fa6";
import { FaInstagram, FaReddit } from "react-icons/fa";

export default function Footer() {
  return (
    // <footer className="mb-10 px-4 text-center text-gray-500">
    //   <small className="mb-2 block text-xs">
    //     &copy; 2030 Xanmoy. All rights reserved.
    //   </small>
    //   {/* <p className="text-xs">
    //     <span className="font-semibold">About this website:</span> built with
    //     React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
    //     Framer Motion, React Email & Resend, Vercel hosting.
    //   </p> */}
    // </footer>

    <footer className="my-10 mt-20 text-gray-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 hidden sm:block">
              © 2024{" "}
              <a href="/" className="hover:underline">
                Xanmoy
              </a>
              . All Rights Reserved.
            </p>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Elsewhere
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://snapcraft.io/publisher/xanmoy"
                    className="hover:underline"
                  >
                    Snapcraft
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://hashnode.com/@xanmoy"
                    className="hover:underline"
                  >
                    Hashnode
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://accounts.fedoraproject.org/user/xanmoy/"
                    className="hover:underline"
                  >
                    Fedora
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Apps
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://xeoly.xanmoy.in" className="hover:underline ">
                    Xeoly
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://sage.xanmoy.in"
                    className="hover:underline"
                  >
                    Sage
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://darwflow.xanmoy.in"
                    className="hover:underline"
                  >
                    Drawflow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 text-center items-center justify-center sm:mt-0">
            <a
              href="https://x.com/xanmoy/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter />

            </a>
            <a
              href="https://github.com/xanmoy/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
            >
              <FaGithub />
            </a>
            <a
              href="https://gitlab.com/xanmoy/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
            >
              <FaGitlab />
            </a>
            <a
              href="https://hashnode.com/@xanmoy/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
            >
              <FaHashnode />
            </a>
            <a
              href="https://www.instagram.com/xanmoy.in/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.reddit.com/user/TadashiNakamoto/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
            >
              <FaReddit />
            </a>
          </div>
          <div className="pt-7 text-center">
            <span className="text-sm pt-4 sm:hidden text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="/" className="hover:underline">
                Xanmoy
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
