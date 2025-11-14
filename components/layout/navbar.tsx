import Image from "next/image";
export function Navbar() {
    return (
        <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo + Brand */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="/images/jogchain head.png"
                        className="h-7"
                        alt="Jog Chain Technology Logo"
                    />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                        Jog Chain Technology
                    </span>
                </a>

                {/* Mobile Button */}
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </button>

                {/* Menu Items */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>

                        {/* Dropdown Example: Company */}
                        <li>
                            <button
                                id="dropdownNvbarButton"
                                data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0"
                            >
                                Company
                                <svg className="w-4 h-4 ms-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                                <ul className="p-2 text-sm text-body font-medium">
                                    <li>
                                        <a href="/about" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/team" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Our Team</a>
                                    </li>
                                    <li>
                                        <a href="/careers" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="/services" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="/pricing" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a href="/contact" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
