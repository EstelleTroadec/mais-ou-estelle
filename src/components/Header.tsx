"use client";

import Link from 'next/link';
import "../../styles/globals.css";
import { AiOutlineDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const menu = document.getElementById('menu');
        const destinationItem = document.getElementById('destination-item');

        if (menu && destinationItem) {
            const showMenu = () => {
                menu.classList.remove('hidden');
            };

            const hideMenu = () => {
                menu.classList.add('hidden');
            };

            // add event listeners to show and hide the menu
            destinationItem.addEventListener('mouseenter', showMenu);
            destinationItem.addEventListener('mouseleave', hideMenu);
            destinationItem.addEventListener('click', showMenu);

            // clean up event listeners when the component is unmounted
            return () => {
                destinationItem.removeEventListener('mouseenter', showMenu);
                destinationItem.removeEventListener('mouseleave', hideMenu);
                destinationItem.removeEventListener('click', showMenu);
            };
        }
    }, [isMounted]);

    return (
        <header className="relative w-full bg-background px-3 py-2">
            <div className="container relative m-auto flex w-10/12">
                <Link href="/" className="flex">
                    <img className="my-auto mr-2 w-20 pb-2" src="/logo.png" alt="logo" />
                </Link>
                <nav className="ml-10 mt-6 flex space-x-8">
                    <ul className="flex font-semibold uppercase text-footerBg">
                        <li
                            id="destination-item"
                            className="group relative mx-4 flex cursor-pointer"
                        >
                            Destinations <AiOutlineDown className="m-1" />
                            <div id="menu" className="absolute left-[-17.125rem] top-full z-50 hidden w-[90rem] bg-footerBg px-8 uppercase text-background">
                                <ul className="w-3/4 p-8">
                                    <li className="px-4 py-2">
                                        <h4 className="text-lg uppercase">Amérique du Nord</h4>
                                        <div className="mt-2">
                                            <ul className="inline-flex space-x-4 text-sm">
                                                <li>Canada</li>
                                                <li>Etats-Unis</li>
                                                <li>Méxique</li>
                                            </ul>
                                        </div>
                                        <hr className="my-2" />
                                    </li>
                                    <li className="px-4 py-2">
                                        <h4 className="text-lg uppercase">Amérique Centrale</h4>
                                        <div className="mt-2">
                                            <ul className="inline-flex space-x-4 text-sm">
                                                <li>Costa Rica</li>
                                                <li>Guatemala</li>
                                            </ul>
                                        </div>
                                        <hr className="my-2" />
                                    </li>
                                    <li className="px-4 py-2">
                                        <h4 className="text-lg uppercase">Amérique du Sud</h4>
                                        <div className="mt-2">
                                            <ul className="inline-flex space-x-4 text-sm">
                                                <li>Colombie</li>
                                                <li>Brésil</li>
                                            </ul>
                                        </div>
                                        <hr className="my-2" />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* To add soon */}
                        {/* <li className="mx-4 flex">Préparatifs <AiOutlineDown className="m-1" /></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};