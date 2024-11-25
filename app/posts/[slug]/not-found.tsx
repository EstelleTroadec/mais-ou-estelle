import Link from "next/link";

export default async function RoutePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="mb-4 text-4xl font-bold text-red-600">Oh, Oh...</h1>
            <p className="mx-auto w-11/12 text-center text-lg text-gray-700">Nous avons cherché en long, en large et en travers, mais l'article que vous cherchez ne semble pas (ou plus) exister.</p>
            <br/>
            <p className="mx-auto w-11/12 text-center text-lg text-gray-700">On essaie avec un autre ? ⬇</p> 
            <Link href="/" className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">Retour à la page d'accueil</Link>
        </div>
    ); 
}