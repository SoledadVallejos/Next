// se crea un layout componente que solo se aplicara  ala pagina del PAGE
// atajo "lrc" + tag

import { Navbar } from "@/components"; // el @ hace referenciaq al root del proyecto


export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
      <main className=" flex flex-col items-center p-24">
        <span className="text-lg">Hola this Layout general</span>
        {children}
      </main>
    </>
  );
}


// con el () en la carpeta general indica a Next que no sera parte d ela URL pero si que estan agrupados y todas las paginas dentro de general pasan por ese layout