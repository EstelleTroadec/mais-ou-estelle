import Link from 'next/link';

export const Header = () => {
    return (
        <header className="w-full bg-card px-3 py-2">
            <div className="container mx-auto my-4 flex w-10/12 gap-2">
                <Link href="/" className="font-mono">
                  Mais où Est(-)elle ?
                </Link>
                <div className="ml-auto"></div>
                <Link href="/" className="text-primary">
                  Posts
                </Link>
            </div>
        </header>
    )
}