"use client";

import { useState } from "react";

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Framework", href: "#framework" },
        { label: "Let's Connect", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="text-xl font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                        Connect Collective
                    </a>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-neutral hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile dropdown menu */}
                {mobileMenuOpen && (
                    <ul className="md:hidden border-t border-gray-200 pb-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block px-4 py-2 text-sm font-medium text-neutral hover:bg-gray-50 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
