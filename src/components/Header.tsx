"use client";

import Link from 'next/link';
import "../../styles/globals.css";
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const destinationMenu = document.getElementById('destination-menu');
        const destinationItem = document.getElementById('destination-item');
        const preparatifsMenu = document.getElementById('preparatifs-menu');
        const preparatifsItem = document.getElementById('preparatifs-item');

        if (destinationMenu && destinationItem && preparatifsMenu && preparatifsItem) {
            const showMenu = (menu) => {
                menu.classList.remove('hidden');
            };

            const hideMenu = (menu) => {
                menu.classList.add('hidden');
            };

            destinationItem.addEventListener('mouseenter', () => showMenu(destinationMenu));
            destinationItem.addEventListener('mouseleave', () => hideMenu(destinationMenu));
            destinationItem.addEventListener('click', () => showMenu(destinationMenu));

            preparatifsItem.addEventListener('mouseenter', () => showMenu(preparatifsMenu));
            preparatifsItem.addEventListener('mouseleave', () => hideMenu(preparatifsMenu));
            preparatifsItem.addEventListener('click', () => showMenu(preparatifsMenu));

            return () => {
                destinationItem.removeEventListener('mouseenter', () => showMenu(destinationMenu));
                destinationItem.removeEventListener('mouseleave', () => hideMenu(destinationMenu));
                destinationItem.removeEventListener('click', () => showMenu(destinationMenu));

                preparatifsItem.removeEventListener('mouseenter', () => showMenu(preparatifsMenu));
                preparatifsItem.removeEventListener('mouseleave', () => hideMenu(preparatifsMenu));
                preparatifsItem.removeEventListener('click', () => showMenu(preparatifsMenu));
            };
        }
    }, [isMounted]);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`fixed w-full pt-1.5 font-chelsea transition-colors duration-200 ${scrolled ? 'bg-background' : 'bg-transparent'}`}>
            <div className="container relative m-auto flex w-10/12 items-center justify-between md:items-start md:justify-start">
                <Link href="/" className="flex">
                    <img className="my-auto mr-2 w-20 pb-1.5" src="/logo.png" alt="logo" />
                </Link>
                <nav className="ml-10 mt-6 hidden space-x-8 md:flex">
                    <ul className="flex uppercase text-footerBg">
                        <li
                            id="destination-item"
                            className="group relative mx-4 flex cursor-pointer"
                        >
                            Destinations <AiOutlineDown className="m-1" />
                            <div id="destination-menu" className="absolute left-0 top-full z-50 hidden w-[90rem] bg-footerBg px-8 font-semibold uppercase text-background">
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
                        </li>
                        <li
                            id="preparatifs-item"
                            className="group relative mx-4 flex cursor-pointer"
                        >
                            Préparatifs <AiOutlineDown className="m-1" />
                            <div id="preparatifs-menu" className="absolute left-0 top-full z-50 hidden w-[90rem] bg-footerBg px-8 font-semibold uppercase text-background">
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                                    <li className="italic">Un peu de patience, ça arrive... ⌛️</li>
                                </ul>
                            </div>
                        </li>    
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
                        <li className="cursor-pointer">
                            <Link href="/countries/etats-unis" onClick={toggleMenu}>Etats-Unis</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="/countries/mexique" onClick={toggleMenu}>Mexique</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="/countries/polynesie-francaise" onClick={toggleMenu}>Polynésie Française</Link>
                        </li>
                        {/* Ajouter d'autres liens ici */}
                    </ul>
                </nav>
            )}
        </header>
    );
};