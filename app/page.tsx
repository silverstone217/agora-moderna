import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div
      className="min-h-svh w-full  flex  gap-4 flex-col
    pt-[85px]
    "
    >
      <Hero />
      <div className="flex  gap-4 flex-col px-4 md:px-6 xl:px-8 py-10 items-center">
        <h2 className="text-5xl xl:text-7xl font-bold tracking-tight capitalize">
          Agora moderna
        </h2>
        <p>
          Binevenue dans ce nouveau blog, parcourez parmi les meilleurs postes
          de la plateforme!
        </p>
      </div>
    </div>
  );
}
