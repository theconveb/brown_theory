'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [mounted, setMounted] = useState(false);
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Portals need the DOM, which isn't available during SSR
    useEffect(() => {
        setMounted(true);
    }, []);

    // Measure the actual rendered header height
    useEffect(() => {
        const measure = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // Lock/unlock body scroll whenever isOpen changes
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const menuOverlay = (
        <div
            style={{
                top: `${headerHeight}px`,
                height: `calc(100dvh - ${headerHeight}px)`,
            }}
            className={`fixed left-0 right-0 bg-zinc-950/95 backdrop-blur-lg flex flex-col justify-between p-8 md:p-12 z-[999] transition-all duration-300 ease-in-out overflow-y-auto ${
                isOpen
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-[-100%] opacity-0 pointer-events-none'
            }`}
        >
            {/* Primary Navigation Links */}
            <nav className="flex flex-col gap-6 mt-8">
                {[
                    { id: '01', label: 'Home' },
                    { id: '02', label: 'Portfolio' },
                    { id: '03', label: 'Services' },
                    { id: '04', label: 'About Team' },
                    { id: '05', label: 'Contact Us' }
                ].map((link) => (
                    <a
                        key={link.id}
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between text-2xl font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                        <span>{link.id}. {link.label}</span>
                        <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                            &rarr;
                        </span>
                    </a>
                ))}
            </nav>

            {/* Footer Content Inside Menu */}
            <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Get in touch</p>
                    <a href="mailto:hello@conveb.com" className="text-sm text-indigo-400 hover:underline">
                        hello@conveb.com
                    </a>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 text-sm text-zinc-400">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <header
                ref={headerRef}
                className="w-full bg-zinc-950 text-zinc-100 border-b border-zinc-900 px-4 py-3 fixed top-0 left-0 right-0 z-50"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between relative">

                    {/* LEFT: Brand Logo */}
                    <div className="flex items-center flex-1 justify-start">
                        <div className="h-12 w-12 flex items-center justify-center font-bold text-white">
                            <Image src='/pngs/logo.png' alt="Logo" width={52} height={52} />
                        </div>
                    </div>

                    {/* CENTER: Brand Name & Sub Caption */}
                    <div className="flex flex-col items-center text-center flex-1 min-w-0 z-50">
                        <h1 className="text-lg font-light tracking-wider uppercase text-white truncate">
                            BROWN THEORY
                        </h1>
                        <p className="text-[10px] text-zinc-400 tracking-widest uppercase font-medium truncate mt-0.5">
                            Digital Presence
                        </p>
                    </div>

                    {/* RIGHT: Menu Bar (Hamburger / Close Toggle) */}
                    <div className="flex items-center flex-1 justify-end z-50">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all duration-200 focus:outline-none touch-manipulation"
                            aria-label="Toggle Menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                /* Close "X" Icon */
                                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                /* Hamburger Icon */
                                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </header>

            {/* Spacer so page content doesn't get hidden under the fixed header */}
            <div style={{ height: `${headerHeight}px` }} />

            {/* Menu is portaled directly to <body>, escaping the header's
                fixed positioning context entirely. This avoids a well-known
                mobile Safari/WebKit bug where fixed-inside-fixed elements
                fail to render or receive touches correctly. */}
            {mounted && createPortal(menuOverlay, document.body)}
        </>
    );
}