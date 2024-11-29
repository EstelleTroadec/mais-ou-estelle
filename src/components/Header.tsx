"use client";

import Link from 'next/link';
import "../../styles/globals.css";
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export const Header = () => {
    // State to track if the page is scrolled
    const [scrolled, setScrolled] = useState(false);

    //? STATES FOR DESKTOP NAVIGATION ONLY
    // State to track if the component is mounted
    const [isMounted, setIsMounted] = useState(false);
    // State to track if the destination menu is visible
    const [destinationMenuVisible, setDestinationMenuVisible] = useState(false);
    // State to track if the preparatifs menu is visible
    const [preparatifsMenuVisible, setPreparatifsMenuVisible] = useState(false);


    //? STATES FOR MOBILE NAVIGATION ONLY
    // State to track if the menu is open
    const [menuOpen, setMenuOpen] = useState(false);


    // Effect to handle scroll events and set the scrolled state
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //? EFFECTS FOR DESKTOP NAVIGATION ONLY
    // Effect to set the component as mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Effect to handle menu events for desktop
    useEffect(() => {
        if (!isMounted) return;

        const destinationItem = document.getElementById('destination-item');
        const destinationMenu = document.getElementById('destination-menu');
        const preparatifsItem = document.getElementById('preparatifs-item');
        const preparatifsMenu = document.getElementById('preparatifs-menu');

        if (destinationItem && destinationMenu && preparatifsItem && preparatifsMenu) {
            const showDestinationMenu = () => setDestinationMenuVisible(true);
            const hideDestinationMenu = () => setDestinationMenuVisible(false);
            const showPreparatifsMenu = () => setPreparatifsMenuVisible(true);
            const hidePreparatifsMenu = () => setPreparatifsMenuVisible(false);

            destinationItem.addEventListener('mouseenter', showDestinationMenu);
            destinationItem.addEventListener('mouseleave', hideDestinationMenu);
            destinationMenu.addEventListener('mouseenter', showDestinationMenu);
            destinationMenu.addEventListener('mouseleave', hideDestinationMenu);

            preparatifsItem.addEventListener('mouseenter', showPreparatifsMenu);
            preparatifsItem.addEventListener('mouseleave', hidePreparatifsMenu);
            preparatifsMenu.addEventListener('mouseenter', showPreparatifsMenu);
            preparatifsMenu.addEventListener('mouseleave', hidePreparatifsMenu);

            return () => {
                destinationItem.removeEventListener('mouseenter', showDestinationMenu);
                destinationItem.removeEventListener('mouseleave', hideDestinationMenu);
                destinationMenu.removeEventListener('mouseenter', showDestinationMenu);
                destinationMenu.removeEventListener('mouseleave', hideDestinationMenu);

                preparatifsItem.removeEventListener('mouseenter', showPreparatifsMenu);
                preparatifsItem.removeEventListener('mouseleave', hidePreparatifsMenu);
                preparatifsMenu.removeEventListener('mouseenter', showPreparatifsMenu);
                preparatifsMenu.removeEventListener('mouseleave', hidePreparatifsMenu);
            };
        }
    }, [isMounted]);

    
    //? EFFECTS FOR MOBILE NAVIGATION ONLY
    // Function to toggle the menu open/close state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to render navigation items
    const renderNavItems = () => (
        <>
            <li
                id="destination-item"
                className="group relative mx-4 flex h-full cursor-pointer items-center"
            >
                Destinations <AiOutlineDown className="m-1" />
            </li>
            <li
                id="preparatifs-item"
                className="group relative mx-4 flex h-full cursor-pointer items-center"
            >
                Préparatifs <AiOutlineDown className="m-1" />
            </li>
        </>
    );

    // Function to render dropdown menus
    const renderDropdownMenus = () => (
        <>
            <div
                id="destination-menu"
                className={`absolute left-0 top-full z-50 ${destinationMenuVisible ? 'block' : 'hidden'} w-screen bg-footerBg px-8 font-semibold uppercase text-background`}
            >
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase ">Amérique du Nord</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <Link href="/countries/etats-unis">
                                    <li>Etats-Unis</li>
                                </Link>
                                <Link href="/countries/mexique">
                                    <li>Mexique</li>
                                </Link>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase">Amérique Centrale</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase">Amérique du Sud</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase">Asie</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase">Europe</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                    <li className="px-4 py-2">
                        <h4 className="text-lg uppercase">Océanie</h4>
                        <div className="mt-2">
                            <ul className="inline-flex space-x-4 font-poppins text-sm">
                                <Link href="/countries/polynesie-francaise">
                                    <li>Polynésie Française</li>
                                </Link>
                            </ul>
                        </div>
                        <hr className="my-2" />
                    </li>
                </ul>
            </div>
            <div id="preparatifs-menu" className={`absolute left-0 top-full z-50 ${preparatifsMenuVisible ? 'block' : 'hidden'} w-screen bg-footerBg px-8 font-semibold uppercase text-background`}>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            </div>
        </>
    );

    return (
        <header className={`fixed mb-1 h-24 w-full pt-0.5 font-chelsea transition-colors duration-200 ${scrolled ? 'bg-background' : 'bg-transparent'}`}>
            <div className="container relative m-auto flex h-full w-10/12 items-center justify-between md:items-start md:justify-start">
                <Link href="/" className="flex h-full">
                    <img className="my-auto mr-2 w-20" src="/logo.png" alt="logo" />
                </Link>
                <nav className="my-auto ml-10 hidden h-full space-x-8 md:flex">
                    <ul className="flex h-full items-center space-x-8 uppercase text-footerBg">
                        {renderNavItems()}
                    </ul>
                </nav>
                <div className="flex items-center md:hidden">
                    <button onClick={toggleMenu} className="my-2 rounded-[5px] border border-footerBg bg-secondaryBg p-4 text-footerBg focus:outline-none">
                        {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav className="bg-footerBg text-background md:hidden">
                    <ul className="flex flex-col items-center space-y-4 p-4 uppercase">
                        {renderNavItems()}
                    </ul>
                </nav>
            )}
            {renderDropdownMenus()}
        </header>
    );
};