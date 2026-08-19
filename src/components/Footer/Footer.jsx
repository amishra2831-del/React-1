import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Resources
                            </h2>

                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow us */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Follow us
                            </h2>

                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://discord.com"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Legal
                            </h2>

                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                {/* Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2026{" "}
                        <a
                            href="https://hiteshchoudhary.com/"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900"
                            aria-label="Facebook"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://discord.com"
                            className="text-gray-500 hover:text-gray-900"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Discord"
                        >
                            Discord
                        </a>

                        <a
                            href="https://github.com"
                            className="text-gray-500 hover:text-gray-900"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900"
                            aria-label="Twitter"
                        >
                            Twitter
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}