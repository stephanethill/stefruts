"use client";
import FruitsStock from "@/components/FruitsStock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-secondary-50 text-secondary-800 select-none">
      <div className="w-full flex flex-col justify-start items-start p-4 gap-4">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src="/stefruts.png" alt="Stefruts" width={175} height={175} />
          <p className="text-2xl font-bold text-secondary-800">
            Pour ceux qui veulent des fruits
          </p>
          <p className="text-2xl font-semibold italic text-secondary-800 opacity-50">
            À cause de ceux qui <span className="text-red-700">volent</span> des
            fruits
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Comment régler ?</p>
          <p>Payer moi en liquide ou via PayLib (06 65 96 88 09)</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            J'ai l'impression que c'est pas ouf ce site, non ?
          </p>
          <p>
            Clairement le système est moyennement au point, ce n'est pas très
            convénient. Cependant ça montrera que la demande de fruits est bien
            réelle
          </p>
        </div>
        <div className="w-full">
          <p className="text-2xl font-semibold">Stock en cours</p>
          <div className="w-full">
            <FruitsStock />
          </div>
        </div>
      </div>
    </main>
  );
}
