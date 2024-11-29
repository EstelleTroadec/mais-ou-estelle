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
    const [destinationsMenuVisible, setDestinationsMenuVisible] = useState(false);
    // State to track if the preparatifs menu is visible
    const [preparationsMenuVisible, setPreparationsMenuVisible] = useState(false);


    //? STATES FOR MOBILE NAVIGATION ONLY
    // State to track if the menu is open
    const [menuOpen, setMenuOpen] = useState(false);
    // State to track if the mobile destination menu is visible
    const [mobileNavItemMenuVisible, setMobileNavItemMenuVisible] = useState(false);
    // State to track which continent's countries are visible
    const [visibleContinent, setVisibleContinent] = useState<string | null>(null);

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

        const destinationsItem = document.getElementById('destinations-item');
        const destinationsMenu = document.getElementById('destinations-menu');
        const preparationsItem = document.getElementById('preparations-item');
        const preparationsMenu = document.getElementById('preparations-menu');

        if (destinationsItem && destinationsMenu && preparationsItem && preparationsMenu) {
            const showDestinationsMenu = () => setDestinationsMenuVisible(true);
            const hideDestinationsMenu = () => setDestinationsMenuVisible(false);
            const showPreparationsMenu = () => setPreparationsMenuVisible(true);
            const hidePreparationsMenu = () => setPreparationsMenuVisible(false);

            destinationsItem.addEventListener('mouseenter', showDestinationsMenu);
            destinationsItem.addEventListener('mouseleave', hideDestinationsMenu);
            destinationsMenu.addEventListener('mouseenter', showDestinationsMenu);
            destinationsMenu.addEventListener('mouseleave', hideDestinationsMenu);

            preparationsItem.addEventListener('mouseenter', showPreparationsMenu);
            preparationsItem.addEventListener('mouseleave', hidePreparationsMenu);
            preparationsMenu.addEventListener('mouseenter', showPreparationsMenu);
            preparationsMenu.addEventListener('mouseleave', hidePreparationsMenu);

            return () => {
                destinationsItem.removeEventListener('mouseenter', showDestinationsMenu);
                destinationsItem.removeEventListener('mouseleave', hideDestinationsMenu);
                destinationsMenu.removeEventListener('mouseenter', showDestinationsMenu);
                destinationsMenu.removeEventListener('mouseleave', hideDestinationsMenu);

                preparationsItem.removeEventListener('mouseenter', showPreparationsMenu);
                preparationsItem.removeEventListener('mouseleave', hidePreparationsMenu);
                preparationsMenu.removeEventListener('mouseenter', showPreparationsMenu);
                preparationsMenu.removeEventListener('mouseleave', hidePreparationsMenu);
            };
        }
    }, [isMounted]);

    
    //? EFFECTS FOR MOBILE NAVIGATION ONLY
    // Function to toggle the menu open/close state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMobileNavItemMenuVisible(false);
    };

    const toggleMobileContinents = () => {
        setMobileNavItemMenuVisible(!mobileNavItemMenuVisible);
    }

    const toggleContinent = (continent: string) => {
        if (visibleContinent === continent) {
            setVisibleContinent(null);
        } else {
            setVisibleContinent(continent);
        }
    }

    // Function to render navigation items
    const renderNavItems = () => (
        <>
            <li
                id="destinations-item"
                className="group relative mx-4 flex h-full cursor-pointer items-center"
            >
                Destinations <AiOutlineDown className="m-1" />
            </li>
            <li
                id="preparations-item"
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
                id="destinations-menu"
                className={`absolute left-0 top-full z-50 ${destinationsMenuVisible ? 'block' : 'hidden'} w-screen bg-footerBg px-8 font-semibold uppercase text-background`}
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
            <div id="preparations-menu" className={`absolute left-0 top-full z-50 ${preparationsMenuVisible ? 'block' : 'hidden'} w-screen bg-footerBg px-8 font-semibold uppercase text-background`}>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            </div>
        </>
    );

 const renderMobileNavItemMenu = () => (
    <ul className="flex flex-col space-y-4 pl-8 text-left uppercase">
        <li className="font-semibold" onClick={() => toggleContinent('north-america')}>
            Amérique du Nord
            {visibleContinent === 'north-america' && (
                <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                    <Link href="/countries/etats-unis">
                        <li>Etats-Unis</li>
                    </Link>
                    <Link href="/countries/mexique">
                        <li>Mexique</li>
                    </Link>
                </ul>
            )}
        </li>
        <li className="font-semibold" onClick={() => toggleContinent('central-america')}>
            Amérique Centrale
            {visibleContinent === 'central-america' && (
                <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            )}
        </li>
        <li className="font-semibold" onClick={() => toggleContinent('south-america')}>
            Amérique du Sud
            {visibleContinent === 'south-america' && (
                <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            )}
        </li>
        <li className="font-semibold" onClick={() => toggleContinent('asia')}>
            Asie
            {visibleContinent === 'asia' && (
                <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            )}
        </li>
        <li className="font-semibold" onClick={() => toggleContinent('europe')}>
            Europe
            {visibleContinent === 'europe' && (
                <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                </ul>
            )}
        </li>
        <li className="font-semibold" onClick={() => toggleContinent('oceania')}>
                Océanie
                {visibleContinent === 'oceania' && (
                    <ul className="flex flex-col space-y-4 p-4 pl-8 font-light uppercase">
                        <Link href="/countries/polynesie-francaise">
                            <li>Polynésie Française</li>
                        </Link>
                    </ul>
                )}
            </li>
        </ul>
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
                    <ul className="flex flex-col space-y-4 p-4 text-left uppercase">
                        <li className="flex cursor-pointer flex-row" onClick={toggleMobileContinents}>
                            Destinations <AiOutlineDown className="m-1" />
                        </li>
                        {mobileNavItemMenuVisible && renderMobileNavItemMenu()}
                    </ul>
                </nav>
            )}
            {renderDropdownMenus()}
        </header>
    );
};