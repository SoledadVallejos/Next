import type { Metadata } from "next";

// atajo mr + tag
export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About page', 'Soo'], // atajo, veo otroa meta con el atajo ctrl + espacio

};

export default function AboutPage() {
    return (
        <main className=" flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    )
}