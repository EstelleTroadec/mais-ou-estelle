import "../../styles/globals.css";
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-footerBg py-4 text-white">
            <div className="container mx-auto flex w-10/12 flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <Link href="/" className="flex">
                        <img className="mr-2 w-20" src="/logo.png" alt="logo" />
                        <h1 className="w-40 pt-2 font-chelsea text-[1.6rem] leading-[1.2] text-background">
                            Mais où Est(-)elle ?
                        </h1>
                    </Link>
                </div>
{/*                 <div className="flex space-x-4">
                    <a href="/about" className="hover:underline">
                        À propos
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Politique de confidentialité
                    </a>
                </div> */}
                <div className="mt-4 md:mt-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Mais Où Est(-)elle ? Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}