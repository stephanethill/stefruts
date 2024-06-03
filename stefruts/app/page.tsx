"use client";
import FruitsStock from "@/components/FruitsStock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen flex flex-col justify-center items-center text-secondary-800 select-none">
      <div className="flex-grow w-full max-w-[850px] bg-white flex flex-col justify-start items-start p-4 gap-4">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src="/stefruts.png" alt="Stefruts" width={175} height={175} />
          <p className="text-2xl font-bold text-secondary-800">
            Pour ceux qui veulent des fruits
          </p>
          <p className="text-2xl font-semibold italic text-secondary-800 opacity-50">
            À cause de ceux qui <span className="text-primary-500">volent</span>{" "}
            des fruits
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Est-ce que c'est gratuit ?</p>
          <p>
            Prenez ce que vous consommez et déposez les fruits que vous
            souhaitez faire partager
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            Ce site est incroyable, comment ça se fait ?
          </p>
          <p>
            Des années de R&D, de design et de storytelling pour arriver à
            l'aboutissement de tout un travail complexe et complet.
          </p>
        </div>
        <div className="w-full">
          <p className="text-2xl font-semibold">Stock en cours</p>
          <div className="w-full">
            <FruitsStock />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-repeat -z-10"
        style={{ backgroundImage: "url('/fruits.webp')" }}
      ></div>
    </main>
  );
}
