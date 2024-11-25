import Link from 'next/link';

export default async function RoutePage() {
    return (
        <div className="my-12 flex flex-col items-center justify-center">
            <img src="/images/404.png" alt="404 error" className="w-60" />
            <h1 className="mb-6 font-chelsea text-3xl font-semibold">ERREUR 404</h1>
            <Link href="/" className="mt-3 rounded bg-footerBg px-4 py-2 text-white hover:bg-gray-700">
                Retour à la page d'accueil
            </Link>
        </div>
    ); 
}